import { Router } from "express";
import { upload } from "../middleware/upload";
import {
  getMediaByFilename,
  createMedia,
} from "../controllers/media.controller";
import { isAccept } from "../middleware/isAccept";
import { validateAdmin } from "../middleware/validate";
export const MediaRouter: Router = Router();

MediaRouter.post(
  "/upload",
  validateAdmin,
  upload.array("images", 5),
  isAccept,
  createMedia
);
MediaRouter.get("/:filename", getMediaByFilename);
