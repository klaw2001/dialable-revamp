import mongoose, { Schema } from "mongoose";
import User from "./userModel";
import StoreProduct from "./storeProduct";

const StoreCartSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    storeProductID: {
      type: Schema.Types.ObjectId,
      ref: StoreProduct,
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

const StoreCart = mongoose.models.StoreCart || mongoose.model("StoreCart", StoreCartSchema);

export default StoreCart;
