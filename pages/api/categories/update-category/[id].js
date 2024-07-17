// updateCategory.js

import Category from "../../../../src/models/categoryModel.js";
import { handleCors } from "@/utils/use-cors";
import connectDB from "../../../../src/dbConfig/dbConfig.js";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import path from "path";
import cloudinary from "@/utils/cloudinary.js";



const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: (req, file) => `product/category`, // Static subfolder structure
    allowed_formats: ["jpg", "png", "jpeg"],
    public_id: (req, file) => {
      const name = path.parse(file.originalname).name; // Extract file name without extension
      return `${Date.now()}_${name}`; // Use file name without extension
    },
  },
});

const upload = multer({ storage });

connectDB()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing
  },
};

export default async function handler(req, res) {
  await handleCors(req,res)


  if (req.method === "PUT") {
    console.log("PUT request received");

    upload.single("image")(req, res, async (err) => {
      if (err) {
        console.error("File upload error:", err);
        return res.status(500).json({ error: "File upload error" });
      }

      console.log("File upload successful");
      const categoryId = req.query.id
      const { name } = req.body;
      const image = req.file?.path; // Get uploaded image path if exists
      console.log("Received categoryId:", categoryId);
      console.log("Received name:", name);
      console.log("Uploaded image path:", image);

      try {
        const updatedData = await Category.updateOne(
          { _id: categoryId },
          {
            $set: {
              name: name,
              image: image,
            },
          }
        );

        if (updatedData.nModified > 0) {
          console.log("Category updated successfully");
          const updatedCategory = await Category.findById(categoryId); // Retrieve updated category
          return res.status(200).json({
            data: updatedCategory,
            message: "Category Updated Successfully",
          });
        }
      } catch (err) {
        console.error("Error updating category:", err);
        res.status(500).json({ error: "Internal server error" });
      }
    });
  } else {
    console.log("Invalid request method:", req.method);
    res.status(405).json({ error: "Method not allowed" });
  }
}
