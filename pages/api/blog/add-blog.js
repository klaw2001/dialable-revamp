import connectDB from "@/dbConfig/dbConfig";
import BlogD from "@/models/blogModel";
import { handleCors } from "@/utils/use-cors";
import handleMiddleware from "@/utils/user-middleware";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "@/utils/cloudinary";

connectDB();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    if (file.fieldname === "thumbnail") {
      return {
        folder: "blogs/thumbnails", // Cloudinary folder where thumbnails will be stored
        allowed_formats: ["jpg", "png", "jpeg"], // Allowed file formats
        public_id: `${Date.now()}_${file.originalname}`, // Unique public ID generator for thumbnail
      };
    } else if (file.fieldname === "images") {
      return {
        folder: "blogs/images", // Cloudinary folder where images will be stored
        allowed_formats: ["jpg", "png", "jpeg"], // Allowed file formats
      };
    }
  },
});

const upload = multer({ storage: storage }).fields([
  { name: "thumbnail", maxCount: 1 }, // Up to 1 thumbnail
  { name: "images", maxCount: 4 }, // Up to 4 images
]);

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing
  },
};

const handler = async (req, res) => {
  await handleCors(req, res);

  const userID = req.userId;

  try {
    upload(req, res, async (err) => {
      if (err) {
        console.error("Upload error:", err);
        return res.status(500).json({ error: "File upload error" });
      }
      const { title, paragraph1, paragraph2, paragraph3, tags } = req.body;

      const comments = [];

      const thumbnailPath = req.files.thumbnail[0].path; // Get thumbnail path
      const imageUrls = req.files.images.map((file) => file.path); // Get image paths


      const blogData = await new BlogD({
        title,
        paragraph1,
        paragraph2,
        paragraph3,
        thumbnail:thumbnailPath,
        images:imageUrls,
        thumbnail_filepath: req.files.thumbnail[0].filename,
        images_filepath: req.files.images.map((file) => file.filename),
        userID,
        tags,
        comments,
      }).save();

      if (blogData) {
        return res.status(201).json({
          data: blogData,
          message: "Blog Added Successfully",
        });
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handleMiddleware(handler);
