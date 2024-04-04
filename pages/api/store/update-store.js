import multer from "multer";
import fs from "fs";
import path from "path";
import Product from "../../../src/models/productModel";
import Store from "../../../src/models/storeModel";

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = "./uploads";
    const subfolder = "products";

    // Create "uploads" folder if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }

    // Create subfolder inside "uploads"
    const subfolderPath = path.join(uploadPath, subfolder);
    if (!fs.existsSync(subfolderPath)) {
      fs.mkdirSync(subfolderPath);
    }

    cb(null, subfolderPath);
  },
  filename: function (req, file, cb) {
    const name = file.originalname; // abc.png
    const ext = path.extname(name); // .png
    const nameArr = name.split("."); // [abc,png]
    nameArr.pop();
    const fname = nameArr.join("."); //abc
    const fullname = fname + "-" + Date.now() + ext; // abc-12345.png
    cb(null, fullname);
  },
});

// Initialize multer instance
const upload = multer({ storage: storage });

// Controller function to handle PUT requests for product update
export default async function PUT(req, res) {
  try {
    // Handle file uploads
    upload(req, res, async function (err) {
      if (err) return res.status(400).json({ message: err.message });

      // Retrieve product ID from request parameters
      const store_id = req.params.store_id;

      // Find the product in the database
      const storeData = await Product.findOne({ _id: store_id });

      // Destructure product data from the request body
      const {
        name,
        category,
        subcategory,
        quantity,
        price,
        shortdescription,
        description,
        thumbnail,
        images,
        variant,
        size,
        shipping,
        returns,
        specialization,
        status,
      } = req.body;

      // Update thumbnail if a new one is uploaded
      let updatedThumbnail = storeData.thumbnail;
      if (req.files && req.files["thumbnail"]) {
        updatedThumbnail = req.files["thumbnail"][0].filename;
        // Delete the previous thumbnail file if it exists
        if (fs.existsSync("./uploads/products/" + storeData.thumbnail)) {
          fs.unlinkSync("./uploads/products/" + storeData.thumbnail);
        }
      }

      // Update images if new ones are uploaded
      let updatedImages = storeData.images;
      if (req.files && req.files["images"]) {
        req.files["images"].forEach((file) => {
          updatedImages.push(file.filename);
        });
        // Delete the previous images files if they exist
        updatedImages.forEach((image) => {
          if (fs.existsSync("./uploads/products/" + image)) {
            fs.unlinkSync("./uploads/products/" + image);
          }
        });
      }

      // Update product data in the database
      const updatedData = await Store.updateOne(
        { _id: store_id },
        {
          $set: {
            name,
            category,
            subcategory,
            quantity,
            price,
            shortdescription,
            description,
            thumbnail: updatedThumbnail,
            images: updatedImages,
            variant,
            size,
            shipping,
            returns,
            specialization,
            status,
          },
        }
      );

      // Send response
      if (updatedData) {
        return res.status(200).json({
          data: updatedData,
          message: "Store Updated Successfully",
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
