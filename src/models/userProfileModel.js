import mongoose, { Schema } from "mongoose";
import User from "./userModel";
import Order from "./orders";

const userProfileSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  orders: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Order,
  },
  dateOfBirth: {
    type: Date,
    default: "",
  },
  language: {
    type: String,
    default: "",
  },
  contact: {
    type: Number,
    default: null,
  },
  address01: {
    type: String,
    default: "",
  },
  address02: {
    type: String,
    default: "",
  },
  countryRegion: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    default: "",
  },
  pincode: {
    type: Number,
    default: null,
  },
});

const UserProfile =
  mongoose.models.User_Profile ||
  mongoose.model("User_Profile", userProfileSchema);

export default UserProfile;
