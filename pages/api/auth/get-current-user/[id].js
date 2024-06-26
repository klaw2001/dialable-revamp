// pages/api/auth/get-current-user/[id].js

import NextCors from "nextjs-cors";
import getCurrentUser from "../get-single-user";

export default async function GET(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
 }); 
  try {
    const userID = req.query.id;

    const user = await getCurrentUser(userID);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: `User does not exist with Id: ${userID}`,
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
}
