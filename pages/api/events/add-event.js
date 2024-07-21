import handleMiddleware from "@/utils/user-middleware";
import { handleCors } from "@/utils/use-cors";
import { sendResponse } from "@/utils/response";
import Event from "@/models/eventsModel";

const handler = async (req, res) => {
  await handleCors(req, res);

  try {
    const userID = req.userId;
    const { name, description, category, type, startDate, location } = req.body;

    const newEvent = new Event({
      user: userID,
      name,
      description,
      category,
      type,
      startDate,
      location,
    });

    await newEvent.save();
    return sendResponse(res, true, newEvent, "Event created successfully", 201);
  } catch (error) {
    console.error("Error in handlePost: ", error);
    return sendResponse(res, false, null, "Internal Server Error", 500);
  }
};
export default handleMiddleware(handler);
