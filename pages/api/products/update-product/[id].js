import { useCors } from "@/utils/use-cors";
import connectDB from "../../../../src/dbConfig/dbConfig";
import Product from "../../../../src/models/productModel";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "@/utils/cloudinary";
import fs from "fs";
import path from "path";

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
        folder: "product/thumbnails", // Cloudinary folder where thumbnails will be stored
        allowed_formats: ["jpg", "png", "jpeg"], // Allowed file formats
        public_id: `thumbnail_${Date.now()}_${file.originalname}`, // Unique public ID generator for thumbnail
      };
    } else if (file.fieldname === "images") {
      return {
        folder: "product/images", // Cloudinary folder where images will be stored
        allowed_formats: ["jpg", "png", "jpeg"], // Allowed file formats
      };
    }
  },
});

// Multer middleware to handle both thumbnail and images upload
const upload = multer({ storage: storage }).fields([
  { name: "thumbnail", maxCount: 1 }, // Up to 1 thumbnail
  { name: "images", maxCount: 4 },    // Up to 4 images
]);

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing
  },
};

// Controller function to handle PUT requests for product update
export default async function PUT(req, res) {
  // Enable CORS
  await useCors(req,res)

  try {
    // Handle file uploads
    upload(req, res, async (err) => {
      if (err) {
        console.error("Upload error:", err);
        return res.status(500).json({ error: "File upload error" });
      }

      // Retrieve product ID from request parameters
      const product_id = req.query.id;

      // Find the product in the database
      const productData = await Product.findById(product_id);

      if (!productData) {
        return res.status(404).json({ error: "Product not found" });
      }

      // Destructure product data from the request body
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

      // Update thumbnail if a new one is uploaded
      let updatedThumbnail = productData.thumbnail;
      if (req.files && req.files["thumbnail"]) {
        const uploadedThumbnail = req.files["thumbnail"][0].path; // Get Cloudinary URL
        updatedThumbnail = uploadedThumbnail;
      }

      // Update images if new ones are uploaded
      let updatedImages = productData.images;
      if (req.files && req.files["images"]) {
        const uploadedImageUrls = req.files["images"].map((file) => file.path);
        updatedImages = uploadedImageUrls;
      }

      // Update product data in the database
      const updatedData = await Product.updateOne(
        { _id: product_id },
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
          message: "Product Updated Successfully",
        });
      } else {
        return res.status(500).json({ error: "Failed to update product" });
      }
    });
  } catch (error) {
    console.error("Error in PUT handler:", error);
    return res.status(500).json({
      message: error.message,
    });
  }
}
