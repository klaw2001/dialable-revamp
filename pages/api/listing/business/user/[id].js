import connectDB from "@/dbConfig/dbConfig";
import BusinessListing from "@/models/listingModel";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  try {
    const user = req.query.id;
    await connectDB();
    const business = await BusinessListing.find({ user }).populate("user").populate("category");
    res.status(200).json(business);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
