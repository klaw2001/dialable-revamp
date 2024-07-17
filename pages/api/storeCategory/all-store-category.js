import connectDB from "@/dbConfig/dbConfig";
import StoreCategory from "@/models/storeCategoryModel";
import { useCors } from "@/utils/use-cors";

connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });

export default async function GET(req, res) {
  await useCors(req,res)

  try {
    const categoryData = await StoreCategory.find();
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
