import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema({
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
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const StoreCategory =
  mongoose.models.StoreCategory ||
  mongoose.model("StoreCategory", CategorySchema);

export default StoreCategory;
