import handleMiddleware from "@/utils/user-middleware"
import { handleCors } from "@/utils/use-cors";
import { sendResponse } from "@/utils/response";
import Community from "@/models/communityModel";

const handler = async (req, res) => {
  await handleCors(req, res);

    try {
        const userID = req.userId;
        const {  communityId, comment } = req.body;

        const community = await Community.findById(communityId);
    
        if (!community) {
        return sendResponse(res, false, null, 'Community not found' , 404)
        }
    
        if (!comment) {
        return sendResponse(res, false, null, 'Comment not found' , 404)
        }
    
        community.comments.push({
          user: userID,
          text: comment,
        });
    
        await community.save();
    
        return sendResponse(res, true, community, 'Comment added' , 200)
    } catch (error) {
        console.error('Error in ', error);
        return sendResponse(res, false, null, 'Error ', 500)
    }
};
export default handleMiddleware(handler);