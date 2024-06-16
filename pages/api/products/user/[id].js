// pages/api/user/products.js
import Product from "@/models/productModel";
import connectDB from "@/dbConfig/dbConfig";
import NextCors from "nextjs-cors";

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === "GET") {
      
        await NextCors(req, res, {
          // Options
          methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
          origin: "*",
          optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
        });
    try {
      const userID = req.query.id;
      await connectDB();
      const products = await Product.find({ userID }).populate("category");
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
