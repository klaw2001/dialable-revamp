import mongoose, { Schema } from "mongoose";
import User from "./userModel";

const blogSchema = new Schema(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    paragraph1: {
      type: String,
      default: "",
    },
    paragraph2: {
      type: String,
      default: "",
    },
    paragraph3: {
      type: String,
      default: "",
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
    comments: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: User,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    tags: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const BlogD = mongoose.models.BlogData || mongoose.model("BlogData", blogSchema);

export default BlogD;
