import Listing from "../../../src/models/listingModel.js";
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
    const listingData = await Listing.find().populate('category').exec();
    
    if (listingData) {
      return res.status(200).json({
        data: listingData,
        message: "Success",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
}
