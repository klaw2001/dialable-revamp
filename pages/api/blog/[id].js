import connectDB from "@/dbConfig/dbConfig";
import BlogD from "@/models/blogModel";
import { sendResponse } from "@/utils/response";
import { useCors } from "@/utils/use-cors";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "@/utils/cloudinary";
import multer from "multer";
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

export default async function handler(req, res) {
  await useCors(req, res);
const userID = req.userId;
  if (req.method === "GET") {
    try {
      const blogID = req.query.id;
      const blogData = await BlogD.findOne({ _id: blogID }).populate('comments.user');
      if (blogData) {
        sendResponse(res, true, blogData, "blog fetched Successfully", 200);
      }
    } catch (error) {
      sendResponse(res, false, error, "error in getting single blog", 500);
    }
  } else if (req.method === "PUT") {
    upload(req, res, async (err) => {
      if (err) {
        console.error("Upload error:", err);
        return res.status(500).json({ error: "File upload error" });
      }
    try {
        const blogID = req.query.id;
        const { title, paragraph1, paragraph2, paragraph3, tags, comment } = req.body;
    
        const blog = await BlogD.findOne({ _id: blogID });
    
        if (!blog) {
          return sendResponse(res, false, null, "Blog not found", 404);
        }
    
        // If blog has an existing thumbnail, delete it
        if (req.files.thumbnail && blog.thumbnail_filepath) {
          await cloudinary.uploader.destroy(blog.thumbnail_filepath);
        }
    
        // If blog has existing images, delete them
        if (req.files.images && blog.images_filepath) {
          await Promise.all(
            blog.images_filepath.map((file) => cloudinary.uploader.destroy(file))
          );
        }
    
        // Prepare new file paths if provided in the request
        const updatedFields = {
          title,
          paragraph1,
          paragraph2,
          paragraph3,
          tags,
          comments:[
            {user:userID},
            {comment:comment}
          ]
        };
    
        if (req.files.thumbnail) {
          updatedFields.thumbnail = req.files.thumbnail[0].path;
          updatedFields.thumbnail_filepath = req.files.thumbnail[0].filename;
        }
    
        if (req.files.images) {
          updatedFields.images = req.files.images.map((file) => file.path);
          updatedFields.images_filepath = req.files.images.map((file) => file.filename);
        }
    
        // Update the blog with the new data
        const updatedData = await BlogD.updateOne(
          { _id: blogID },
          { $set: updatedFields }
        );
    
        if (updatedData.acknowledged) {
          sendResponse(res, true, updatedData, "Updated successfully", 200);
        } else {
          sendResponse(res, false, null, "Update failed", 400);
        }
      } catch (error) {
        sendResponse(res, false, error, "Internal server error", 500);
      }
    });
    
  } else if (req.method === "DELETE") {
    try {
      const blogID = req.query.id;
      const blog = await BlogD.findOne({ _id: blogID });

      if (!blog) {
        sendResponse(res, false, null, "blog not found", 404);
      }

      const deleteBlog = await BlogD.deleteOne(blog);

      if (deleteBlog.acknowledged) {
        sendResponse(res, false, deleteBlog, "Blog Deleted Successfully", 200);
      }
    } catch (error) {
      sendResponse(res, false, error, "internal server error", 500);
    }
  }
}
