import handleMiddleware from "@/utils/user-middleware"
import { handleCors } from "@/utils/use-cors";
import { sendResponse } from "@/utils/response";
import connectDB from "@/dbConfig/dbConfig";
import UserProfile from "@/models/userProfileModel";

connectDB()
const handler = async (req, res) => {
    await handleCors(req, res);

    const userID = req.userId;
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

      const newUserProfile = new UserProfile({
        user: userID,
        dateOfBirth,
        language,
        contact,
        address01,
        address02,
        countryRegion,
        state,
        pincode,
      });
  
      const savedUserProfile = await newUserProfile.save();
      return sendResponse(res, true, savedUserProfile, 'Profile created successfully', 201);
    } catch (error) {
      console.error('Error in creating user profile:', error);
      return sendResponse(res, false, null, 'Error creating profile', 500);
    }
};
export default handleMiddleware(handler);