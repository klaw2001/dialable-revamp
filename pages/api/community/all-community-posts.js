import handleMiddleware from "@/utils/user-middleware"
import { handleCors } from "@/utils/use-cors";
import { sendResponse } from "@/utils/response";
import Community from "@/models/communityModel";
import connectDB from "@/dbConfig/dbConfig";
connectDB()
const handler = async (req, res) => {
  await handleCors(req, res);

    try {
        const communities = await Community.find().populate('user')
        return sendResponse(res, true, communities, 'success' , 200)
    } catch (error) {
        console.error('Error in getting communities', error);
        return sendResponse(res, false, null, 'Error in getting communities ', 500)
    }
};
export default handleMiddleware(handler);