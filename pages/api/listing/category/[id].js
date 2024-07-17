import { useCors } from "@/utils/use-cors";
import connectDB from "@/dbConfig/dbConfig";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import ListingCategory from "@/models/listingCategoryModel";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: (req, file) => `businessListings/category`, // Static subfolder structure
    allowed_formats: ["jpg", "png", "jpeg"],
    public_id: (req, file) => {
      const name = path.parse(file.originalname).name; // Extract file name without extension
      return `${Date.now()}_${name}`; // Use file name without extension
    },
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing
  },
};

connectDB()

export default async function handler(req, res) {
  await useCors(req,res)

  if (req.method === "GET") {
    // Handle GET request
    try {
      const categoryID = req.query.id;
      const categoryData = await ListingCategory.findOne({ _id: categoryID });

      if (categoryData) {
        return res.status(200).json({
          data: categoryData,
          message: "Success",
        });
      } else {
        return res.status(404).json({
          message: "Category not found",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  } else if (req.method === "DELETE") {
    // Handle DELETE request
    try {
      const categoryID = req.query.id;
      const category = await ListingCategory.findOne({ _id: categoryID });

      if (!category) {
        return res.status(404).json({
          message: "Category not found",
        });
      }
      await cloudinary.uploader.destroy(category.filepath);
      const deleteCat = await ListingCategory.deleteOne(category);

      if (deleteCat.acknowledged) {
        return res.status(200).json({
          message: "Category Deleted!",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  } else if (req.method === "PUT") {
    // Handle PUT or PATCH request for update
    upload.single("image")(req, res, async (err) => {
      if (err) {
        console.error("File upload error:", err);
        return res.status(500).json({ error: "File upload error" });
      }
      try {
        const categoryID = req.query.id;
        const { name } = req.body;

        const categoryData = await ListingCategory.findOne({ _id: categoryID });

        if (!categoryData) {
          return res.status(404).json({
            message: "Store Category Not Found",
          });
        }
        const imagePublicId = categoryData.filepath; // Extract the public ID from the URL
        await cloudinary.uploader.destroy(imagePublicId);

        const category = await ListingCategory.findOne({ _id: categoryID });

        if (!category) {
          return res.status(404).json({
            message: "Category not found",
          });
        }

        const updatedData = await ListingCategory.updateOne(
            { _id: categoryID },
            {
              $set: {
                name: name,
                image: req.file.path, // Use the uploaded file path
              },
            }
          );
  
        if (updatedData.acknowledged) {
          return res.status(200).json({
            message: "Category Updated!",
          });
        }
      } catch (error) {
        console.error("UPDATE error:", error);
        return res.status(500).json({
          message: error.message,
        });
      }
    });
  } else {
    // Handle other HTTP methods
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }
}
