import { handleCors } from "@/utils/use-cors";
import Cart from "../../../src/models/cartModel.js";
import connectDB from "../../../src/dbConfig/dbConfig.js";
connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });

export default async function handler(req, res) {
  await handleCors(req,res)

  if (req.method === "GET") {
    try {
      const userID = req.query.id;
      const cartData = await Cart.find({ userID: userID }).populate('productID');
      if (cartData) {
        return res.status(200).json({
          data: cartData,
          message: "Success",
          // customers: customers,
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  } else if (req.method === "PUT" || req.method === "PATCH") {
    try {
      const cartID = req.query.id;
      const { updatetype } = req.query;
      const cartData = await Cart.findOne({ _id: cartID });

      let quantity = cartData.quantity;

      if (updatetype === "increment") {
        quantity += 1;
      }
      if (updatetype === "decrement") {
        quantity -= 1;
      }

      const updatedItem = await Cart.updateOne(
        { _id: cartID },
        {
          $set: {
            quantity: quantity,
          },
        }
      );

      if (updatedItem.acknowledged) {
        return res.status(200).json({
          message: "Updated",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  } else if (req.method === "DELETE") {
    try {
      const cartID = req.query.id;

      const deletedItem = await Cart.deleteOne({ _id: cartID });
      if (deletedItem.acknowledged) {
        return res.status(200).json({
          data: deletedItem,
          message: "Cart Item Deleted Successfully",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}
