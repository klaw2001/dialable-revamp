import handleMiddleware from "@/utils/user-middleware";
import { handleCors } from "@/utils/use-cors";
import { sendResponse } from "@/utils/response";
import Community from "@/models/communityModel";

const handler = async (req, res) => {
  await handleCors(req, res);

  try {
    const userID = req.userId;
    const { communityId } = req.body;

    const community = await Community.findById(communityId);

    if (!community) {
      return res.status(404).json({ message: "Post not found" });
    }

    const alreadyLiked = community.likes.some(
      (like) => like.user.toString() === userID
    );

    if (alreadyLiked) {
      return res.status(400).json({ message: "Post already liked" });
    }

    community.likes.push({ user: userID });

    await community.save();

    return sendResponse(res, true, community, "post liked", 200);
  } catch (error) {
    console.error("Error in add like", error);
    return sendResponse(res, false, null, "Error in add like ", 500);
  }
};
export default handleMiddleware(handler);
