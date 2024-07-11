import mongoose, { Schema } from "mongoose";

const listingCategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: null,
    },
    filepath:{
      type:String,
    }
  },
  { timestamps: true }
);

const ListingCategory =
  mongoose.models.ListingCategory ||
  mongoose.model("ListingCategory", listingCategorySchema);

export default ListingCategory;
