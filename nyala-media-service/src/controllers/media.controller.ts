import { Request, Response } from "express";
import path from "path";
import fs from "fs";

interface MulterRequest extends Request {
  file?: Express.Multer.File;
}

export const getMediaByFilename = (req: Request, res: Response) => {
  const filename: string = req.params.filename;
  const filePath: string = path.join(__dirname, "../uploads", filename);

  fs.stat(filePath, (err) => {
    if (err) {
      if (err.code === "ENOENT") {
        return res.sendStatus(404);
      }
      return res.sendStatus(500);
    }

    return res.sendFile(filePath);
  });
};

export const createMedia = (req: MulterRequest, res: Response) => {
  if (!req.files || (req.files as Express.Multer.File[]).length === 0) {
    return res.status(400).send({ message: "No files uploaded." });
  }

  const mediaResponses = (req.files as Express.Multer.File[]).map((file) => {
    const originalName = file.originalname;
    const fileUrl = `${process.env.BASE_URL}/media/${file.filename}`;
    const altText = `Gambar ${originalName}`;

    return {
      name: originalName,
      url: fileUrl,
      alt: altText,
    };
  });

  return res.status(200).send({
    message: "Files uploaded successfully!",
    files: mediaResponses, // Menyertakan detail file dalam respon
  });
};
