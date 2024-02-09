import mongoose, { Schema } from "mongoose";
import User from "./userModel";
import Product from "./productModel";

const WishListSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    productID: {
      type: Schema.Types.ObjectId,
      ref: Product,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    thumbnail: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const WishList =
  mongoose.models.WishList || mongoose.model("WishList", WishListSchema);

export default WishList;
