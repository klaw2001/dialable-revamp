import NextCors from "nextjs-cors";
import connectDB from "../../../src/dbConfig/dbConfig";
import Product from "../../../src/models/productModel";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "@/utils/cloudinary";

// Connect to the database
connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });

// Configure multer storage for thumbnails
// Configure multer storage for thumbnails
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "product/thumbnails", // Cloudinary folder where uploads will be stored
    allowed_formats: ["jpg", "png", "jpeg"], // Allowed file formats
    public_id: (req, file) => `${Date.now()}_${file.originalname}`, // Unique public ID generator
  },
});
const upload = multer({ storage: storage }).single("thumbnail");

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing
  },
};
// Main API route handler
export default async function handler(req, res) {
  // Enable CORS
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  try {
    // Upload thumbnail
    upload(req, res, async (err) => {
      if (err) {
        console.error("Thumbnail upload error:", err);
        return res.status(500).json({ error: "Thumbnail upload error" });
      }

      console.log("Thumbnail upload successful");

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
        userID,
      } = req.body;

      if (!req.file) {
        console.error("No thumbnail uploaded");
        return res.status(400).json({ error: "No thumbnail uploaded" });
      }

      // Create product data with Cloudinary image URL for thumbnail
      const productData = new Product({
        name,
        category,
        subcategory,
        quantity,
        price,
        shortdescription,
        description,
        thumbnail: req.file.path, // Assuming req.file.path contains Cloudinary URL
        variant,
        size,
        shipping,
        returns,
        specialization,
        status,
        userID,
      });

      // Validate product data
      const validationError = productData.validateSync();
      if (validationError) {
        return res.status(400).json({ message: validationError.message });
      }

      // Save product data to the database
      await productData.save();

      // Send response
      return res.status(201).json({
        data: productData,
        success: true,
        message: "Product Added Successfully",
      });
    });
  } catch (error) {
    // Handle errors
    console.error("Error in POST handler:", error);
    return res.status(500).json({
      message: error.message,
    });
  }
}
