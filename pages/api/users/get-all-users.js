import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { useCors } from "@/utils/use-cors";
import handleMiddleware from "@/utils/user-middleware";

const handler = async(req, res) => {
  connectDB();

  try {
    await useCors(req, res);

    const users = await User.find();

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
}

export default handleMiddleware(handler)