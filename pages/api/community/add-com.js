import Community from "../../../src/models/communityModel.js";

import { useCors } from "@/utils/use-cors";
import connectDB from "../../../src/dbConfig/dbConfig.js";
connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });

export default async function POST(req, res) {
  await useCors(req,res)
  try {
    const { user, title, description } = req.body;
    const community = await Community.create({ user, title, description });
    res.status(201).json({ success: true, data: community });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
