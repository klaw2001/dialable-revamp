import connectDB from "@/dbConfig/dbConfig";
import StoreProduct from "@/models/storeProduct";
import NextCors from "nextjs-cors";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "@/utils/cloudinary";
import multer from "multer";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    if (file.fieldname === "thumbnail") {
      return {
        folder: "storeProduct/thumbnails", // Cloudinary folder where thumbnails will be stored
        allowed_formats: ["jpg", "png", "jpeg"], // Allowed file formats
        public_id: `${Date.now()}_${file.originalname}`, // Unique public ID generator for thumbnail
      };
    } else if (file.fieldname === "images") {
      return {
        folder: "storeProduct/images", // Cloudinary folder where images will be stored
        allowed_formats: ["jpg", "png", "jpeg"], // Allowed file formats
      };
    }
  },
});

// Multer middleware to handle both thumbnail and images upload
const upload = multer({ storage: storage }).fields([
  { name: "thumbnail", maxCount: 1 }, // Up to 1 thumbnail
  { name: "images", maxCount: 4 }, // Up to 4 images
]);
connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing
  },
};

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.method === "GET") {
    try {
      const productID = req.query.id;
      const productData = await StoreProduct.findOne({
        _id: productID,
      }).populate("category");

      if (productData) {
        return res.status(200).json({
          data: productData,
          message: "Success",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  } else if (req.method === "PUT") {
    try {
      upload(req, res, async (err) => {
        if (err) {
          console.error("Upload error:", err);
          return res.status(500).json({ error: "File upload error" });
        }
  
        const productID = req.query.id;
        const productData = await StoreProduct.findById(productID);
  
        if (!productData) {
          return res.status(404).json({
            message: "Store Product Not Found",
          });
        }
  
        const {
          name,
          category,
          quantity,
          price,
          shortdescription,
          description,
          variant,
          size,
          shipping,
          returns,
          specialization,
          status,
          userID,
        } = req.body;
  
        if (productData.thumbnail) {
          const thumbnailPublicID = productData.thumbnail_filepath;
          await cloudinary.uploader.destroy(thumbnailPublicID);
        }
  
        if (productData.images) {
          const imagesFilePath = productData.images_filepath;
          await Promise.all(imagesFilePath.map((file) => cloudinary.uploader.destroy(file)));
        }
  
        const thumbnailPath = req.files.thumbnail ? req.files.thumbnail[0].path : productData.thumbnail;
        const imageUrls = req.files.images ? req.files.images.map((file) => file.path) : productData.images;
  
        productData.name = name || productData.name;
        productData.category = category || productData.category;
        productData.quantity = quantity || productData.quantity;
        productData.price = price || productData.price;
        productData.shortdescription = shortdescription || productData.shortdescription;
        productData.description = description || productData.description;
        productData.thumbnail = thumbnailPath;
        productData.images = imageUrls;
        productData.thumbnail_filepath = req.files.thumbnail ? req.files.thumbnail[0].filename : productData.thumbnail_filepath;
        productData.images_filepath = req.files.images ? req.files.images.map((file) => file.filename) : productData.images_filepath;
        productData.variant = variant || productData.variant;
        productData.size = size || productData.size;
        productData.shipping = shipping || productData.shipping;
        productData.returns = returns || productData.returns;
        productData.specialization = specialization || productData.specialization;
        productData.status = status || productData.status;
        productData.userID = userID || productData.userID;
  
        // Validate product data
        const validationError = productData.validateSync();
        if (validationError) {
          return res.status(400).json({ message: validationError.message });
        }
  
        // Save the updated product data to the database
        await productData.save();
  
        // Send response
        return res.status(200).json({
          data: productData,
          success: true,
          message: "Product Updated Successfully",
        });
      });
    } catch (error) {
      console.error("Error in PUT handler:", error);
      return res.status(500).json({
        message: error.message,
      });
    }
  }
   else if (req.method === "DELETE") {
    try {
      const productID = req.query.id;
      const productData = await StoreProduct.findById(productID);
  
      if (!productData) {
        return res.status(404).json({
          message: "Store Product Not Found",
        });
      }
  
      // Delete thumbnail from Cloudinary
      if (productData.thumbnail_filepath) {
        await cloudinary.uploader.destroy(productData.thumbnail_filepath);
      }
  
      // Delete images from Cloudinary
      if (productData.images_filepath && productData.images_filepath.length > 0) {
        await Promise.all(productData.images_filepath.map((file) => cloudinary.uploader.destroy(file)));
      }
  
      // Delete the product from the database
      await StoreProduct.deleteOne({ _id: productID });
  
      // Send response
      return res.status(200).json({
        success: true,
        message: "Product Deleted Successfully",
      });
    } catch (error) {
      console.error("Error in DELETE handler:", error);
      return res.status(500).json({
        message: error.message,
      });
    }
  }
  
}
