import User from "@/models/userModel";
import { useCors } from "@/utils/use-cors";
import handleMiddleware from "@/utils/user-middleware";
import bcrypt from "bcrypt"
const handler = async (req, res) => {
  await useCors(req, res);

  const userID = req.userId;

  if (req.method === "GET") {
    try {
      if (!userID) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const userData = await User.findOne({ _id: userID });

      if (!userData) {
        return res.status(404).json({
          msg: "User Not Found",
        });
      }

      return res.status(200).json({
        success: true,
        data: userData,
      });
    } catch (error) {
      console.error("Error fetching user:", error);
      return res.status(500).json({
        success: false,
        msg: "Internal Server Error",
      });
    }
  } else if (req.method === "PUT") {
    try {
      if (!userID) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const { firstName, lastName, fullName, email, role, password } = req.body;

      let hashedPassword;
      if (password) {
        hashedPassword = await bcrypt.hash(password, 10);
      }

      const updatedFields = {
        firstName,
        lastName,
        fullName,
        email,
        role,
        password: hashedPassword,
      };

      const updatedUser = await User.updateOne(
        { _id: userID },
        { $set: updatedFields }
      );

      if (!updatedUser) {
        return res.status(404).json({
          msg: "User Not Found",
        });
      }

      return res.status(200).json({
        success: true,
        data: updatedUser,
        msg: "User updated successfully",
      });
    } catch (error) {
      console.error("Error updating user:", error);
      return res.status(500).json({
        success: false,
        msg: "Internal Server Error",
      });
    }
  } else if (req.method === "DELETE") {
    try {
      if (!userID) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const deletedUser = await User.findOneAndDelete({ _id: userID });

      if (!deletedUser) {
        return res.status(404).json({
          msg: "User Not Found",
        });
      }

      return res.status(200).json({
        success: true,
        data: deletedUser,
        msg: "User deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting user:", error);
      return res.status(500).json({
        success: false,
        msg: "Internal Server Error",
      });
    }
  }
};

export default handleMiddleware(handler);
