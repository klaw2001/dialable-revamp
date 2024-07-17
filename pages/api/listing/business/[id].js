import connectDB from "@/dbConfig/dbConfig";
import StoreProduct from "@/models/storeProduct";
import { handleCors } from "@/utils/use-cors";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "@/utils/cloudinary";
import multer from "multer";
import BusinessListing from "@/models/listingModel";

// Configure multer storage for both thumbnails and images
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: (req, file) => {
    if (file.fieldname === "thumbnail") {
      return {
        folder: "business-directory/thumbnails", // Cloudinary folder where thumbnails will be stored
        allowed_formats: ["jpg", "png", "jpeg"], // Allowed file formats
        public_id: `${Date.now()}_${file.originalname}`, // Unique public ID generator for thumbnail
      };
    } else if (file.fieldname === "images") {
      return {
        folder: "business-directory/images", // Cloudinary folder where images will be stored
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
connectDB();

export const config = {
  api: {
    bodyParser: false, // Disable Next.js body parsing
  },
};

export default async function handler(req, res) {
  await handleCors(req,res)

  if (req.method === "GET") {
    try {
      const listingID = req.query.id;
      const buisnessData = await BusinessListing.findOne({
        _id: listingID,
      })
        .populate("user")
        .populate("category");

      if (buisnessData) {
        return res.status(200).json({
          data: buisnessData,
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

        const listingID = req.query.id;
        const buisnessData = await BusinessListing.findById(listingID);

        if (!buisnessData) {
          return res.status(404).json({
            message: "Business Not Found",
          });
        }

        const {
          name,
          description,
          email,
          phone,
          features,
          tags,
          website,
          designation,
          location,
          lowestPrice,
          highestPrice,
          company,
          iframe,
          facebook,
          twitter,
          linked,
          skype,
        } = req.body;

        if (buisnessData.thumbnail) {
          const thumbnailPublicID = buisnessData.thumbnail_filepath;
          await cloudinary.uploader.destroy(thumbnailPublicID);
        }

        if (buisnessData.images) {
          const imagesFilePath = buisnessData.images_filepath;
          await Promise.all(
            imagesFilePath.map((file) => cloudinary.uploader.destroy(file))
          );
        }

         const thumbnailPath = req.files.thumbnail
        ? req.files.thumbnail[0].path
        : buisnessData.thumbnail;
      const thumbnailFilePath = req.files.thumbnail
        ? req.files.thumbnail[0].filename
        : buisnessData.thumbnail_filepath;
      const imageUrls = req.files.images
        ? req.files.images.map((file) => file.path)
        : buisnessData.images;
      const imageFilePaths = req.files.images
        ? req.files.images.map((file) => file.filename)
        : buisnessData.images_filepath;

        const updatedData = await BusinessListing.updateOne(
          { _id: listingID },
          {
            $set: {
              name,
              description,
              email,
              phone,
              features,
              thumbnail: thumbnailPath,
              images: imageUrls,
              thumbnail_filepath: thumbnailFilePath,
              images_filepath: imageFilePaths,
              tags,
              website,
              designation,
              location,
              lowestPrice,
              highestPrice,
              company,
              iframe,
              facebook,
              twitter,
              linked,
              skype,
            },
          }
        );

        if (updatedData.acknowledged) {
          return res.status(200).json({
            data: updatedData,
            success: true,
            message: "Business Updated Successfully",
          });
        }
      });
    } catch (error) {
      console.error("Error in PUT handler:", error);
      return res.status(500).json({
        message: error.message,
      });
    }
  } else if (req.method === "DELETE") {
    try {
      const listingID = req.query.id;
      const buisnessData = await BusinessListing.findById(listingID);

      if (!buisnessData) {
        return res.status(404).json({
          message: "Business Not Found",
        });
      }

      // Delete thumbnail from Cloudinary
      if (buisnessData.thumbnail_filepath) {
        await cloudinary.uploader.destroy(buisnessData.thumbnail_filepath);
      }

      // Delete images from Cloudinary
      if (
        buisnessData.images_filepath &&
        buisnessData.images_filepath.length > 0
      ) {
        await Promise.all(
          buisnessData.images_filepath.map((file) =>
            cloudinary.uploader.destroy(file)
          )
        );
      }

      // Delete the product from the database
      await BusinessListing.deleteOne({ _id: listingID });

      // Send response
      return res.status(200).json({
        success: true,
        message: "Business Deleted Successfully",
      });
    } catch (error) {
      console.error("Error in DELETE handler:", error);
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}
