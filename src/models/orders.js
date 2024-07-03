// models/order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required:false
  },
  paymentId: {
    type: String,
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    },
  ],
  paymentStatus: {
    type: String,
    required: true,
    enum: ["created", "completed", "failed"],
    default: "created",
  },
  paymentAmount: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.models.Neworder || mongoose.model("Neworder", orderSchema);

export default Order;
