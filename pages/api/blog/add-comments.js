import { useCors } from "@/utils/use-cors";
import BlogD from "../../../src/models/blogModel";
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
    const { userId, userComment } = req.body;

    // Validate the required fields
    if (!userComment || !userId) {
      return res
        .status(400)
        .json({ success: false, error: "userComment or userId is missing" });
    }

    const newBlogComment = new BlogD({
      userId,
      userComment,
    });

    const savedBlogComment = await newBlogComment.save();
    // newBlogComment.save()

    return res.status(201).json({ success: true, data: savedBlogComment });
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
}
