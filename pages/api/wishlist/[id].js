import NextCors from "nextjs-cors";
import WishList from "../../../src/models/wishListModel.js";
import connectDB from "../../../src/dbConfig/dbConfig.js";
connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });

export default async function handler(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  if (req.method === "GET") {
    try {
      const userID = req.query.id;
      const wishListData = await WishList.find({ userID: userID }).populate(
        "productID"
      );
      if (wishListData) {
        return res.status(200).json({
          data: wishListData,
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
      const wishListID = req.query.id;
      const { updatetype } = req.query;
      const wishListData = await WishList.findOne({ _id: wishListID });

      let quantity = wishListData.quantity;

      if (updatetype === "increment") {
        quantity += 1;
      }
      if (updatetype === "decrement") {
        quantity -= 1;
      }

      const updatedItem = await WishList.updateOne(
        { _id: wishListID },
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
      const wishListID = req.query.id;

      const deletedItem = await WishList.deleteOne({ _id: wishListID });
      if (deletedItem.acknowledged) {
        return res.status(200).json({
          data: deletedItem,
          message: "WishList Item Deleted Successfully",
        });
      }
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}
