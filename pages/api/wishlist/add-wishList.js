import { useCors } from "@/utils/use-cors";
import WishList from "../../../src/models/wishListModel.js";
import connectDB from "../../../src/dbConfig/dbConfig.js";
import Product from "../../../src/models/productModel.js";
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
    const { userID, productID } = req.body;
    const proData = await Product.findOne({ _id: productID });
    const existwishListItem = await WishList.findOne({
      productID: productID,
      userID: userID,
    });
    if (existwishListItem) {
      let quantity = existwishListItem.quantity + 1;
      const updatedItem = await WishList.updateOne(
        { _id: existwishListItem._id },
        {
          $set: {
            quantity: quantity,
          },
        }
      );
      if (updatedItem.acknowledged) {
        return res.status(200).json({
          data: updatedItem,
          message: "updated",
        });
      }
    }

    const wishListData = new WishList({
      userID: userID,
      productID: productID,
      name: proData.name,
      price: proData.price,
      quantity: 1,
      thumbnail: proData.thumbnail,
    });

    wishListData.save();
    console.log(wishListData);
    if (wishListData) {
      return res.status(201).json({
        data: wishListData,
        message: "Product Successfully added to WishList",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
