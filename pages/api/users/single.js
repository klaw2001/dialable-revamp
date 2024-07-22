import User from "@/models/userModel";
import { sendResponse } from "@/utils/response";
import { handleCors } from "@/utils/use-cors";
import handleMiddleware from "@/utils/user-middleware";
import bcrypt from "bcrypt";

const handler = async (req, res) => {
  await handleCors(req, res);

  const userID = req.userId;

  if (req.method === "GET") {
    try {
      if (!userID) {
        return sendResponse(res, false, null, "Unauthorized", 401);
      }

      const userData = await User.findOne({ _id: userID });

      if (!userData) {
        return sendResponse(res, false, null, "User Not Found", 404);
      }

      return sendResponse(res, true, userData, "User fetched successfully");
    } catch (error) {
      console.error("Error fetching user:", error);
      return sendResponse(res, false, null, "Internal Server Error", 500);
    }
  } else if (req.method === "PUT") {
    try {
      if (!userID) {
        return sendResponse(res, false, null, "Unauthorized", 401);
      }

      const { 
        firstName, lastName, fullName, email, role, password, dateOfBirth,
        language, contact, address01, address02, countryRegion, state, pincode 
      } = req.body;

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
        dateOfBirth,
        language,
        contact,
        address01,
        address02,
        countryRegion,
        state,
        pincode
      };

      const updatedUser = await User.updateOne(
        { _id: userID },
        { $set: updatedFields }
      );

      if (!updatedUser) {
        return sendResponse(res, false, null, "User Not Found", 404);
      }

      return sendResponse(res, true, updatedUser, "User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      return sendResponse(res, false, null, "Internal Server Error", 500);
    }
  } else if (req.method === "DELETE") {
    try {
      if (!userID) {
        return sendResponse(res, false, null, "Unauthorized", 401);
      }

      const deletedUser = await User.findOneAndDelete({ _id: userID });

      if (!deletedUser) {
        return sendResponse(res, false, null, "User Not Found", 404);
      }

      return sendResponse(res, true, deletedUser, "User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      return sendResponse(res, false, null, "Internal Server Error", 500);
    }
  }
};

export default handleMiddleware(handler);