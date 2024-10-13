import { Request } from "express";
import multer, { StorageEngine } from "multer";
import path from "path";

const diskStorage: StorageEngine = multer.diskStorage({
  destination: function (req, file: Express.Multer.File, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file: Express.Multer.File, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const filetypes = /jpeg|jpg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error("Only jpeg|jpg|png are allowed!"));
  }
};

export const upload = multer({ storage: diskStorage, fileFilter: fileFilter });
