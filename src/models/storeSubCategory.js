import mongoose, { Schema } from "mongoose";
import StoreCategory from "./storeCategoryModel";

const SubCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: StoreCategory,
  },
  image: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const SubStoreCategory =
  mongoose.models.SubStoreCategory ||
  mongoose.model("SubStoreCategory", SubCategorySchema);

export default SubStoreCategory;
