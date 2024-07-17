import { useCors } from "@/utils/use-cors";
import connectDB from "../../../src/dbConfig/dbConfig.js";
import Coupon from "../../../src/models/couponModel.js";
connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });

export default async function GET(req, res) {
  await useCors(req,res)

  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (error) {
    throw new Error(error);
  }
}
