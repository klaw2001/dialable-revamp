import handleMiddleware from "@/utils/user-middleware";
import { handleCors } from "@/utils/use-cors";
import { sendResponse } from "@/utils/response";
import connectDB from "@/dbConfig/dbConfig";
import UserProfile from "@/models/userProfileModel";
import Order from "@/models/orders";

connectDB();

const handler = async (req, res) => {
  await handleCors(req, res);

  const userID = req.userId;

  if (req.method === "GET") {
    try {
      const userProfiles = await UserProfile.find({ user: userID }).populate(
        "user"
      );
      return sendResponse(
        res,
        true,
        userProfiles,
        "Profiles retrieved successfully",
        200
      );
    } catch (error) {
      console.error("Error in retrieving user profiles:", error);
      return sendResponse(res, false, null, "Error retrieving profiles", 500);
    }
  } else if (req.method === "PUT") {
    try {
      const {
        dateOfBirth,
        language,
        contact,
        address01,
        address02,
        countryRegion,
        state,
        pincode,
      } = req.body;

      const updatedProfile = await UserProfile.findOneAndUpdate(
        { user: userID },
        {
          dateOfBirth,
          language,
          contact,
          address01,
          address02,
          countryRegion,
          state,
          pincode,
        },
        { new: true, runValidators: true }
      );

      if (updatedProfile) {
        return sendResponse(
          res,
          true,
          updatedProfile,
          "Profile updated successfully",
          200
        );
      }
    } catch (error) {
      console.error("Error in updating user profile:", error);
      return sendResponse(res, false, null, "Error updating profile", 500);
    }
  }
};

export default handleMiddleware(handler);
