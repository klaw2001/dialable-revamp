import Category from "../../../src/models/categoryModel.js";
import { handleCors } from "@/utils/use-cors";
import connectDB from "../../../src/dbConfig/dbConfig.js";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import path from "path";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

  if (req.method === "POST") {
    console.log("POST request received");

    upload.single("image")(req, res, async (err) => {
      if (err) {
        console.error("File upload error:", err);
        return res.status(500).json({ error: "File upload error" });
      }

      console.log("File upload successful");

      const { name } = req.body;
      console.log("Received name:", name);
      console.log("Uploaded image path:", req.file?.path);

      try {
        const categoryData = await new Category({
          name,
          image: req.file.path,
        }).save();

        if (categoryData) {
          console.log("Category saved successfully:", categoryData);
          return res.status(201).json({
            data: categoryData,
            message: "Category Added Successfully",
          });
        }
      } catch (err) {
        console.error("Database save error:", err);
        res.status(500).json({ error: "Internal server error" });
      }
    });
  } else {
    console.log("Invalid request method:", req.method);
    res.status(405).json({ error: "Method not allowed" });
  }
}
