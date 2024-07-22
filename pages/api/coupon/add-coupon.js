import handleMiddleware from "@/utils/user-middleware";
import { handleCors } from "@/utils/use-cors";
import { sendResponse } from "@/utils/response";
import connectDB from "@/dbConfig/dbConfig";
import Coupon from "@/models/couponModel";

connectDB();
const handler = async (req, res) => {
  await handleCors(req, res);

  try {
    const { code, discount, product, expirationDate, isActive } = req.body;

    const existingCode = await Coupon.findOne({ code: code });
    if (existingCode) {
      return sendResponse(res, false, null, "Coupon Code Already Exists", 400);
    }

    const coupon = new Coupon({
      code,
      discount,
      product,
      expirationDate,
      isActive,
    });
    await coupon.save();
    return sendResponse(res, true, coupon, "Coupon Created Successfully", 200);
  } catch (error) {
    console.error("Error in adding coupon", error);
    return sendResponse(res, false, null, "Error in adding coupon", 500);
  }
};
export default handleMiddleware(handler);
