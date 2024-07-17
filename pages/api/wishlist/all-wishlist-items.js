import handleMiddleware from "@/utils/user-middleware";
import { useCors } from "@/utils/use-cors";
import { sendResponse } from "@/utils/response";
import WishList from "@/models/wishListModel";

const handler = async (req, res) => {
  await useCors(req, res);
  const userID = req.userId;
  try {
    const wishlist = await WishList.findOne({ userID: userID }).populate('products');
    if (!wishlist) {
      sendResponse(res, false, null, "Wishlist for the user not found", 404);
    }

    return sendResponse(res, true, wishlist, "success", 200);
  } catch (error) {
    console.error("Error in all wishlist items", error);
    return sendResponse(res, false, null, "Error ", 500);
  }
};
export default handleMiddleware(handler);
