import multer from "multer";
import fs from "fs";
import path from "path";
import Product from "../../../src/models/productModel";
import Store from "../../../src/models/storeModel";
import NextCors from "nextjs-cors";
import connectDB from "../../../src/dbConfig/dbConfig";
import { imageUpload } from "../../../src/utils";

// Connect to the database
connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define the destination folder for file uploads
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
    // Define the filename for uploaded files
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

// Controller function to handle POST requests
export default async function POST(req, res) {
  // Enable CORS
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  try {
    // Destructure product data from request body
    const {
      name,
      category,
      subcategory,
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
    } = req.body;

    // Check if thumbnail image exists in the request
    const thumbnailFile = req.files?.thumbnail;
    // Check if images exist in the request
    const imagesFiles = req.files?.images;

    // Upload thumbnail image to Cloudinary if it exists
    let thumbnailUrl = "";
    if (thumbnailFile) {
      const thumbnailImageUrl = await imageUpload(thumbnailFile[0]); // Upload image to Cloudinary
      thumbnailUrl = thumbnailImageUrl; // Get the URL of the uploaded image
    }

    // Upload images to Cloudinary if they exist
    let imagesUrls = "";
    if (imagesFiles) {
      const imagesUrlsArray = await Promise.all(
        imagesFiles.map(async (file) => {
          return await imageUpload(file); // Upload image to Cloudinary
        })
      );
      imagesUrls = imagesUrlsArray.join(","); // Join the URLs of the uploaded images
    }

    // Create product data with Cloudinary image URLs
    const storeData = new Store({
      name,
      category,
      subcategory,
      quantity,
      price,
      shortdescription,
      description,
      thumbnail: thumbnailUrl, // Set thumbnail URL
      images: imagesUrls, // Set images URLs
      variant,
      size,
      shipping,
      returns,
      specialization,
      status,
    });

    // Validate product data
    const validationError = storeData.validateSync();
    if (validationError) {
      return res.status(400).json({ message: validationError.message });
    }

    // Save product data to the database
    await storeData.save();

    // Send response
    return res.status(201).json({
      data: storeData,
      message: "Store Added Successfully",
    });
  } catch (error) {
    // Handle errors
    return res.status(500).json({
      message: error.message,
    });
  }
}
