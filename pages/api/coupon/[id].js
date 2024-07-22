import handleMiddleware from "@/utils/user-middleware";
import { handleCors } from "@/utils/use-cors";
import { sendResponse } from "@/utils/response";
import connectDB from "@/dbConfig/dbConfig";
import Coupon from "@/models/couponModel";

connectDB();

const handler = async (req, res) => {
  await handleCors(req, res);

  const { method } = req;
  const id = req.query.id;

  if (method === "GET") {
    try {
      const coupon = await Coupon.findById(id);
      if (!coupon) {
        return sendResponse(res, false, null, "Coupon Not Found", 404);
      }
      return sendResponse(
        res,
        true,
        coupon,
        "Coupon Retrieved Successfully",
        200
      );
    } catch (error) {
      console.error("Error fetching coupon", error);
      return sendResponse(res, false, null, "Error fetching coupon", 500);
    }
  }

  if (method === "PUT") {
    try {
      const { code, discount, product, expirationDate, isActive } = req.body;
      const coupon = await Coupon.findByIdAndUpdate(
        id,
        { code, discount, product, expirationDate, isActive },
        { new: true, runValidators: true }
      );
      if (!coupon) {
        return sendResponse(res, false, null, "Coupon Not Found", 404);
      }
      return sendResponse(
        res,
        true,
        coupon,
        "Coupon Updated Successfully",
        200
      );
    } catch (error) {
      console.error("Error updating coupon", error);
      return sendResponse(res, false, null, "Error updating coupon", 500);
    }
  }

  if (method === "DELETE") {
    try {
      const coupon = await Coupon.findByIdAndDelete(id);
      if (!coupon) {
        return sendResponse(res, false, null, "Coupon Not Found", 404);
      }
      return sendResponse(res, true, null, "Coupon Deleted Successfully", 200);
    } catch (error) {
      console.error("Error deleting coupon", error);
      return sendResponse(res, false, null, "Error deleting coupon", 500);
    }
  }

  return sendResponse(res, false, null, "Method Not Allowed", 405);
};

export default handleMiddleware(handler);
