import handleMiddleware from "@/utils/user-middleware";
import { handleCors } from "@/utils/use-cors";
import { sendResponse } from "@/utils/response";
import Event from "@/models/eventsModel";

const handler = async (req, res) => {
  await handleCors(req, res);
  if (req.method === "GET") {
    try {
      const event = await Event.findById(req.query.id);
      if (!event) {
        return sendResponse(res, false, null, "Event not found", 404);
      }
      return sendResponse(
        res,
        true,
        event,
        "Event retrieved successfully",
        200
      );
    } catch (error) {
      console.error("Error in handleGetSingle: ", error);
      return sendResponse(res, false, null, "Internal Server Error", 500);
    }
  } else if (req.method === "PUT") {
    try {
      const { user, name, description, category, type, startDate, location } =
        req.body;

      const updatedEvent = await Event.findByIdAndUpdate(
        req.query.id,
        { user, name, description, category, type, startDate, location },
        { new: true }
      );

      if (!updatedEvent) {
        return sendResponse(res, false, null, "Event not found", 404);
      }
      return sendResponse(
        res,
        true,
        updatedEvent,
        "Event updated successfully",
        200
      );
    } catch (error) {
      console.error("Error in handlePut: ", error);
      return sendResponse(res, false, null, "Internal Server Error", 500);
    }
  } else if (req.method === "DELETE") {
    try {
      const deletedEvent = await Event.findByIdAndDelete(req.query.id);
      if (!deletedEvent) {
        return sendResponse(res, false, null, "Event not found", 404);
      }
      return sendResponse(
        res,
        true,
        deletedEvent,
        "Event deleted successfully",
        200
      );
    } catch (error) {
      console.error("Error in handleDelete: ", error);
      return sendResponse(res, false, null, "Internal Server Error", 500);
    }
  }
};
export default handleMiddleware(handler);
