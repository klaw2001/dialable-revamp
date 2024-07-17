import connectDB from "@/dbConfig/dbConfig";
import WishList from "@/models/wishListModel";
import { sendResponse } from "@/utils/response";
import { handleCors } from "@/utils/use-cors";
import handleMiddleware from "@/utils/user-middleware";

connectDB();

const handler = async(req, res) => {
  await handleCors(req, res);

  const userID = req.userId;
  if (!userID) {
    return sendResponse(res, false, null, "Missing user ID", 401);
  }

  const  productID  = req.query.id;
  if (!productID) {
    return sendResponse(res, false, null, "Missing product ID", 400);
  }

  try {
    let wishlist = await WishList.findOne({ userID });
    if (!wishlist) {
      return sendResponse(res, false, null, "Wishlist not found", 404);
    }

    const productIndex = wishlist.products.findIndex(
      (item) => item.toString() === productID
    );

    if (productIndex === -1) {
      return sendResponse(res, false, null, "Product not found in wishlist", 404);
    }

    wishlist.products.splice(productIndex, 1);
    await wishlist.save();

    return sendResponse(
      res,
      true,
      wishlist,
      "Product successfully removed from wishlist",
      200
    );
  } catch (error) {
    console.error("Error removing product from wishlist:", error);
    return sendResponse(res, false, null, "Error removing product from wishlist", 500);
  }
}

export default handleMiddleware(handler)