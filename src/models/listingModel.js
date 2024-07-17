import mongoose, { Schema } from "mongoose";
import User from "./userModel";
import ListingCategory from "./listingCategoryModel";
const listingSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: User,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: ListingCategory,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    features: {
      type: [String],
      default: [],
    },
    thumbnail: {
      type: String,
      default: "",
    },
    images: {
      type: Array,
      default: [],
    },
    thumbnail_filepath: {
      type: String,
      default: "",
    },
    images_filepath: {
      type: [String],    
      default: [],
    },
    tags: {
      type: [String],
      default: null,
    },
    website: {
      type: String,
    },
    designation: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    lowestPrice: {
      type: Number,
      default: null,
    },
    highestPrice: {
      type: Number,
      default: null,
    },
    company: {
      type: String,
      default: "",
    },
    iframe: {
      type: String,
    },
    facebook: {
      type: String,
    },
    twitter: {
      type: String,
    },
    linked: {
      type: String,
    },
    skype: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const BusinessListing =
  mongoose.models.Business_listing ||
  mongoose.model("Business_listing", listingSchema);
export default BusinessListing;
