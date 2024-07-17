import { useCors } from "@/utils/use-cors";

const handler = async (req, res) => {
  await useCors(req, res);
  if (req.method === "POST") {
    res.setHeader(
      "Set-Cookie",
      "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT"
    );
    res.status(200).json({ message: "Logged out successfully" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
};

export default handler;
