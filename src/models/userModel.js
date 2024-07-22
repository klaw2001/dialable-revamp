import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: false,
      lowercase: true,
      trim: true,
      index: true,
    },
    lastName: {
      type: String,
      required: false,
      lowercase: true,
      trim: true,
      index: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ["ADMIN", "VENDER", "CUSTOMER"],
      default: "CUSTOMER",
      required: false,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
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
  },
  { timestamps: true }
);


const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
