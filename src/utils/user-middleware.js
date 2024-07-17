import Cookies from "cookies";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

const handleMiddleware = (handler) => {
  return async (req, res) => {
    const cookies = new Cookies(req, res);
    const token = cookies.get("token");

    if (token) {
      try {
        const decoded = jwt.verify(token, secret);
        req.userId = decoded.id; // Attach userId to the req object
      } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
      }
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }

    return handler(req, res);
  };
};

export default handleMiddleware;
