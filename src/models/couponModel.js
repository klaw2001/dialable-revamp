import mongoose from "mongoose";
import Product from "./productModel";

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Product,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Coupon = mongoose.models.Product_Coupon || mongoose.model("Product_Coupon", couponSchema);

export default Coupon;
