import { useCors } from "@/utils/use-cors";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "@/utils/cloudinary";
import connectDB from "@/dbConfig/dbConfig";
import StoreProduct from "@/models/storeProduct";

// Connect to the database
connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });

// Configure multer storage for both thumbnails and images
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

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing
  },
};

// Main API route handler
export default async function handler(req, res) {
  // Enable CORS
  await useCors(req,res)

  try {
    // Handle file uploads
    upload(req, res, async (err) => {
      if (err) {
        console.error("Upload error:", err);
        return res.status(500).json({ error: "File upload error" });
      }

      // Destructure product data from request body
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

      if (!req.files.thumbnail) {
        console.error("No thumbnail uploaded");
        return res.status(400).json({ error: "No thumbnail uploaded" });
      }

      const thumbnailPath = req.files.thumbnail[0].path; // Get thumbnail path
      const imageUrls = req.files.images.map((file) => file.path); // Get image paths

      // Create product data with Cloudinary image URLs
      const productData = new StoreProduct({
        name,
        category,
        quantity,
        price,
        shortdescription,
        description,
        thumbnail: thumbnailPath,
        images: imageUrls,
        thumbnail_filepath: req.files.thumbnail[0].filename,
        images_filepath: req.files.images.map((file) => file.filename),
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
