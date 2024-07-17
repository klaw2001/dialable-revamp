import connectDB from "@/dbConfig/dbConfig";
import Order from "@/models/orders";
import { useCors } from "@/utils/use-cors";

export default async function handler(req, res) {
  connectDB();
  await useCors(req,res)
  try {
    // productIds: ["659d5c41ca4abbf13b502a30", "659d5bd8ca4abbf13b502a2e"]
    const orders = await Order.find().populate('products.product').populate("user");
    return res.status(200).json({
      data:orders,
    });
  } catch (error) {
    console.error(error)
    res.status(500).json({
      err:error,
    });
  }
}
