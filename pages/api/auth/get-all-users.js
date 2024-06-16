import connectDB from "@/dbConfig/dbConfig.js";
import User from "../../../src/models/userModel.js";
import NextCors from "nextjs-cors";
connectDB()
export default async function GET(req, res) {
 await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 }); 

  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
}
