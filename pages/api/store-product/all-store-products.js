import connectDB from "@/dbConfig/dbConfig";
import StoreProduct from "@/models/storeProduct";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await NextCors(req, res, {
      // Options
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      origin: "*",
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });
    try {
      await connectDB();
      const products = await StoreProduct.find().populate("category");
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
