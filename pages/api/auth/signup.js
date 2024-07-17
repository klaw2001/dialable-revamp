import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { handleCors } from "@/utils/use-cors.js";

connectDB();

export default async function handler(req, res) {
  await handleCors(req, res);

  try {
    if (req.method !== "POST") {
      return res.status(405).end(); // Method Not Allowed
    }

    const { email, fullName, password, role } = req.body;

    const existedUser = await User.findOne({ email });
    if (existedUser) {
      return res.status(409).json({
        message: "User with this email already exists",
      });
    }

    const user = await User.create({
      email,
      fullName,
      password,
      role: role || "CUSTOMER",
    });

    return res.status(201).json({
      status: 200,
      data: {
        _id: user._id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
      },
      message: "User registered successfully.",
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}
