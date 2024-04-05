import mongoose, { Schema } from "mongoose";
import StoreCategory from "./storeCategoryModel";
import SubStoreCategory from "./storeSubCategory";

import User from "./userModel";

const storeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: StoreCategory,
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: SubStoreCategory,
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
    type: String,
    default: "",
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

const Store = mongoose.models.Store || mongoose.model("Store", storeSchema);

export default Store;
