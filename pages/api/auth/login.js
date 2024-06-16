import User from "../../../src/models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Cookies from "cookies";
import connectDB from "@/dbConfig/dbConfig.js";
import cors from "cors";
import NextCors from "nextjs-cors";

connectDB();

export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 });
  try {
    
    if (req.method === "OPTIONS") {
      // Preflight request response
      return res.status(200).end();
      }
      
      if (req.method === "POST") {
      const { email, password } = req.body;

      const existUser = await User.findOne({ email: email });

      if (!existUser) {
        return res.status(400).json({
          message: "User Does Not Exist!",
        });
      }

      const passwordCompare = await bcrypt.compare(
        password,
        existUser.password
      );

      if (!passwordCompare) {
        return res.status(400).json({
          message: "Invalid Credentials!",
        });
      }

      const token = jwt.sign(
        {
          id: existUser._id,
          email: existUser.email,
        },
        "mysecretkey",
        { expiresIn: "1h" }
      );
      
      var cookies = new Cookies(req, res);
      cookies.set("users", JSON.stringify(existUser));

      return res.status(200).json({
        data: existUser,
        success: true,
        token: token,
        message: "Login Successful!",
      });
    } else {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
