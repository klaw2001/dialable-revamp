import { handleCors } from "@/utils/use-cors";
import connectDB from "../../../src/dbConfig/dbConfig.js";
import Coupon from "../../../src/models/couponModel.js";
connectDB()
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("not connected");
  });

export default async function handler(req, res) {
  await handleCors(req,res)

  if (req.method === "GET") {
    const { id } = req.params;

    try {
      const getAcoupon = await Coupon.findById(id);
      res.json(getAcoupon);
    } catch (error) {
      throw new Error(error);
    }
  } else if (req.method === "PUT" || req.method === "PATCH") {
    const { id } = req.params;

    try {
      const updatecoupon = await Coupon.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updatecoupon);
    } catch (error) {
      throw new Error(error);
    }
  } else if (req.method === "DELETE") {
    const { id } = req.params;

    try {
      const deletecoupon = await Coupon.findByIdAndDelete(id);
      res.json(deletecoupon);
    } catch (error) {
      throw new Error(error);
    }
  } else if (req.method === "POST") {
    try {
      const newCoupon = await Coupon.create(req.body);
      res.json(newCoupon);
    } catch (error) {
      throw new Error(error);
    }
  }
}
