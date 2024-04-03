import multer from "multer";
import fs from "fs";
import path from "path";
import Product from "../../../src/models/productModel.js";
import Store from "../../../src/models/storeModel.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = "./uploads";
    const subfolder = "products";

    // Create "uploads" folder if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }

    // Create subfolder inside "uploads"
    const subfolderPath = path.join(uploadPath, subfolder);
    if (!fs.existsSync(subfolderPath)) {
      fs.mkdirSync(subfolderPath);
    }

    cb(null, subfolderPath);
  },
  filename: function (req, file, cb) {
    const name = file.originalname; // abc.png
    const ext = path.extname(name); // .png
    const nameArr = name.split("."); // [abc,png]
    nameArr.pop();
    const fname = nameArr.join("."); //abc
    const fullname = fname + "-" + Date.now() + ext; // abc-12345.png
    cb(null, fullname);
  },
});

const upload = multer({ storage: storage });

export default async function DELETE(req, res) {
  try {
    const storeID = req.params.store_id;

    const storeData = await Store.findOne({ _id: storeID });

    let images = storeData.images;
    if (req.files && req.files["images"]) {
      req.files["images"].forEach((file) => {
        images.push(file.filename);
      });
      if (fs.existsSync("./uploads/products/" + storeData.images)) {
        fs.unlinkSync("./uploads/products/" + storeData.images);
      }
    }

    const removeData = await Product.deleteOne({ _id: storeID });
    if (removeData.acknowledged) {
      return res.status(200).json({
        data: removeData,
        message: "Product Deleted Successfully",
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: error.msg,
    });
  }
}
