import connectDB from "@/dbConfig/dbConfig";
import Community from "@/models/communityModel";
import { sendResponse } from "@/utils/response";
import { handleCors } from "@/utils/use-cors";
import handleMiddleware from "@/utils/user-middleware";
connectDB();

const handler = async(req, res) =>{
  await handleCors(req, res);
  try {
    const userID = req.userId;
    const { title, description } = req.body;
    const newCommunity = new Community({
      user:userID,
      title,
      description,
    });
    const savedCommunity = await newCommunity.save();
    sendResponse(res, true, savedCommunity, "Community Data Saved", 201);
  } catch (error) {
    console.log(error);
    sendResponse(res, false, null, "Community Data Not Saved", 500);
  }
}

export default handleMiddleware(handler)