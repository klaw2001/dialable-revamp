import handleMiddleware from "@/utils/user-middleware"
import { handleCors } from "@/utils/use-cors";
import { sendResponse } from "@/utils/response";
import Event from "@/models/eventsModel";

const handler = async (req, res) => {
  await handleCors(req, res);

  try {
    const events = await Event.find();
    return sendResponse(res, true, events, 'Events retrieved successfully', 200);
  } catch (error) {
    console.error('Error in handleGetAll: ', error);
    return sendResponse(res, false, null, 'Internal Server Error', 500);
  }
};
export default handleMiddleware(handler);