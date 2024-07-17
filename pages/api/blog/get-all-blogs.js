import { handleCors } from "@/utils/use-cors";
import BlogD from "../../../src/models/blogModel";
import connectDB from "../../../src/dbConfig/dbConfig";
import handleMiddleware from "@/utils/user-middleware";
connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });
const handler = async(req, res) =>{
  await handleCors(req,res)

  try {
    const blogData = await BlogD.find().populate('userID');

    if (blogData) {
      return res.status(200).json({
        data: blogData,
        message: "Blog fetched Successfully",
      });
    } else {
      return res.status(404).json({
        message: "Blog not found",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
export default handleMiddleware(handler)