import Category from "../../../src/models/categoryModel.js";
import multer from "multer";
import fs from "fs";
import path from "path";
import connectDB from "../../../src/dbConfig/dbConfig.js";
import NextCors from "nextjs-cors";
connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });



export default async function GET(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    origin: "*",
    optionsSuccessStatus: 200,
  });


  try {
    const categoryData = await Category.find();
    if (categoryData) {
      return res.status(200).json({
        data: categoryData,
        message: "Success",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
