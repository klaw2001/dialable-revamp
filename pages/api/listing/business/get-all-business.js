import connectDB from "@/dbConfig/dbConfig";
import BusinessListing from "@/models/listingModel";
import { useCors } from "@/utils/use-cors";

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  try {
    await connectDB();
    const buisnessData = await BusinessListing.find()
      .populate("user")
      .populate("category");
    return res.status(200).json({
      data: buisnessData,
      success: true,
      message: "Buisness Fetched Successfully",
    });
  } catch (error) {
    console.error("Error in Get handler:", error);
    return res.status(500).json({
      message: error.message,
    });
  }
}
