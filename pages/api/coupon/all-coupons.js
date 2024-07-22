import connectDB from "@/dbConfig/dbConfig";
import Coupon from "@/models/couponModel";
import { sendResponse } from "@/utils/response";
import { handleCors } from "@/utils/use-cors";
connectDB()

export default async function GET(req, res) {
  await handleCors(req,res)

  try {
    const coupons = await Coupon.find();
    if(!coupons){
    return sendResponse(res, false, null, "Coupons Not Found", 404);
    }
    return sendResponse(res, true, coupons, "All Coupons Fetched", 200);
  } catch (error) {
    console.error(error)
    return sendResponse(res, false, null, "Error in All Coupons", 500);

  }
}
