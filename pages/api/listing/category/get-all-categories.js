import connectDB from "@/dbConfig/dbConfig";
import ListingCategory from "@/models/listingCategoryModel";
import { handleCors } from "@/utils/use-cors";


connectDB()

export default async function handler(req, res) {
  await handleCors(req,res)

  if (req.method === "GET") {
    try {
      // Get all listing categories
      const allListingCategories = await ListingCategory.find();

      return res
        .status(200)
        .json({ success: true, data: allListingCategories });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, error: "Internal Server Error" });
    }
  } else {
    return res
      .status(405)
      .json({ success: false, error: "Method Not Allowed" });
  }
}
