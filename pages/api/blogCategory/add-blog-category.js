import { useCors } from "@/utils/use-cors";
import BlogCategory from "../../../src/models/blogCategoryModel";
import connectDB from "../../../src/dbConfig/dbConfig";

connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });

export default async function POST(req, res) {
  await useCors(req,res)

  try {
    const { name } = req.body;

    // Validate the required fields
    if (!name) {
      return res
        .status(400)
        .json({ success: false, error: "Name is required" });
    }

    const newBlogCategory = new BlogCategory({
      name,
    });

    const savedBlogCategory = await newBlogCategory.save();

    return res.status(201).json({ success: true, data: savedBlogCategory });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
}
