import multer from "multer";
import fs from "fs";
import path from "path";
import Category from "../../../src/models/categoryModel.js";
import { handleCors } from "@/utils/use-cors";
import connectDB from "../../../src/dbConfig/dbConfig.js";
connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });



export default async function DELETE(req, res) {
   if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  await handleCors(req,res)

  try {
    const categoryID = req.params.category_id;
    const category = await Category.findOne({ _id: categoryID });

    const deleteCat = await Category.deleteOne(category);
    console.log(deleteCat)
    if (deleteCat.acknowledged) {
      return res.status(200).json({
        message: "Category Deleted!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
