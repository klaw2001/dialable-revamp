import connectDB from "@/dbConfig/dbConfig";
import StoreCart from "@/models/storeCartModel";
import { handleCors } from "@/utils/use-cors";
connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });

export default async function POST(req, res) {
  await handleCors(req,res)

  try {
    const { userID, storeProductID } = req.body;
    const proData = await StoreCart.findOne({ _id: storeProductID });
    const existCartItem = await StoreCart.findOne({
      storeProductID: storeProductID,
      userID: userID,
    });
    if (existCartItem) {
      let quantity = existCartItem.quantity + 1;
      const updatedItem = await StoreCart.updateOne(
        { _id: existCartItem._id },
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

    const cartData = new StoreCart({
      userID: userID,
      storeProductID: storeProductID,
      name: proData.name,
      price: proData.price,
      quantity: 1,
      thumbnail: proData.thumbnail,
    });

    cartData.save();
    if (cartData) {
      return res.status(201).json({
        data: cartData,
        message: "Product Successfully added to Cart",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
