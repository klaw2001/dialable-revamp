import mongoose, { Schema } from "mongoose";
import StoreCategory from "./storeCategoryModel";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: StoreCategory,
  },
  userID: { 
    type: Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: false,
  },
  shortdescription: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
    maxLength: 1000,
  },
  thumbnail: {
    type: String,
    default: "",
  },
  thumbnail_filepath: {
    type: String,
    default: "",
  },
  images: {
    type: [String],    
    default: [],
  },
  images_filepath: {
    type: [String],    
    default: [],
  },
  variant: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    enum: ["s", "m", "l", "xl", "xxl", "xxxl"],
    default: null,
  },
  shipping: {
    type: String,
  },
  returns: {
    type: String,
  },
  specialization: {
    type: String,
  },
  status: {
    type: String,
    enum: ["In Stock", "Out Of Stock"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const StoreProduct =
  mongoose.models.New_Store_Products || mongoose.model("New_Store_Products", productSchema);

export default StoreProduct;
