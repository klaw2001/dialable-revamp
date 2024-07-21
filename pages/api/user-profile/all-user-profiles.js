    import handleMiddleware from "@/utils/user-middleware";
    import { handleCors } from "@/utils/use-cors";
    import { sendResponse } from "@/utils/response";
    import connectDB from "@/dbConfig/dbConfig";
    import UserProfile from "@/models/userProfileModel";
    import Order from '@/models/orders'
    connectDB();

    const handler = async (req, res) => {
    await handleCors(req, res);

    const userID = req.userId;

    try {
        const userProfiles = await UserProfile.find({ user: userID })
        .populate("user")
        //   .populate({
        //     path: "orders",
        //     match: { user: userID } // Filter orders by userID
        //   });

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
    };

    export default handleMiddleware(handler);
