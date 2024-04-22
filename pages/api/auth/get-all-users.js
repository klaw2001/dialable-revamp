import connectDB from "@/dbConfig/dbConfig.js";
import User from "../../../src/models/userModel.js";
connectDB()
export default async function GET(req, res) {

  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
}
