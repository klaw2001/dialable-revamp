import connectDB from "@/dbConfig/dbConfig";
import Order from "@/models/orders";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  connectDB();
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
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
