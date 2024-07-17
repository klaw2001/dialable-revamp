import handleMiddleware from "@/utils/user-middleware";
import { useCors } from "@/utils/use-cors";
import { sendResponse } from "@/utils/response";
import BlogD from "@/models/blogModel";

const handler = async (req, res) => {
  await useCors(req, res);
  const userID = req.userId;
  try {
    if (!userID) {
      sendResponse(res, false, null, "Missing user ID", 401);
    }
    const blogs = await BlogD.findOne({ userID: userID });
    if (blogs) {
      sendResponse(res, true, blogs, "blogs fetched Successfully", 200);
    }else{
      sendResponse(res, false, null, "blogs not found", 404);
    }
  } catch (error) {
    sendResponse(res, false, error, "error in getting user blogs", 500);
  }
};

export default handleMiddleware(handler);
