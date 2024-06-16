import mongoose, { Schema } from "mongoose";

import Category from "./categoryModel";
import SubCategory from "./subCategoryModel";
import User from "./userModel";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: Category,
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: SubCategory,
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
  images: {
    type: Array,
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

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
