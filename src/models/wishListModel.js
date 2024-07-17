import mongoose, { Schema } from "mongoose";
import Product from "./productModel";
import User from "./userModel";

const WishListSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: Product,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const WishList =
  mongoose.models.WishListItems ||
  mongoose.model("WishListItems", WishListSchema);

export default WishList;
