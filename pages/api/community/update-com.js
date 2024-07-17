import Community from "../../../src/models/communityModel.js";

import { handleCors } from "@/utils/use-cors";
import connectDB from "../../../src/dbConfig/dbConfig.js";
connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });

export default async function POST(req, res) {
  await handleCors(req,res)
  try {
    const { user, title, description } = req.body;
    const community = await Community.findByIdAndUpdate(
      req.params.id,
      { user, title, description },
      { new: true }
    );
    if (!community) {
      return res
        .status(404)
        .json({ success: false, message: "Community not found" });
    }
    res.json({ success: true, data: community });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}
