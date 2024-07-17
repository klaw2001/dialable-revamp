import connectDB from "@/dbConfig/dbConfig";
import Product from "@/models/productModel";
import WishList from "@/models/wishListModel";
import { sendResponse } from "@/utils/response";
import { useCors } from "@/utils/use-cors";
import handleMiddleware from "@/utils/user-middleware";

connectDB();

const handler = async(req, res) =>{
  await useCors(req, res);

  const userID = req.userId;
  if (!userID) {
    return sendResponse(res, false, null, "Missing user ID", 401);
  }

  try {
    const { productID } = req.body;

    if (!productID) {
      return sendResponse(res, false, null, "Missing product ID", 400);
    }

    const productData = await Product.findOne({ _id: productID });
    if (!productData) {
      return sendResponse(res, false, null, "Product not found", 404);
    }

    let wishlist = await WishList.findOne({ userID });

    if (!wishlist) {
      wishlist = new WishList({ userID, products: [productID] });
    } else {
      const existingProduct = wishlist.products.find(
        (item) => item.toString() === productID
      );

      if (existingProduct) {
        return sendResponse(res, false, null, "Product already exists in wishlist", 400);
      }

      wishlist.products.push(productID);
    }

    await wishlist.save();

    return sendResponse(
      res,
      true,
      wishlist,
      "Product successfully added to wishlist",
      201
    );
  } catch (error) {
    console.error("Error adding product to wishlist:", error);
    return sendResponse(res, false, null, "Error adding product to wishlist", 500);
  }
}


export default handleMiddleware(handler)