import { Router } from "express";
import { uploader } from "../controllers/uploader.controllers.js";
import { upload } from "../middleware/multer.middleware.js";

const uploadRoute = Router();

uploadRoute.route("/upload").post(
    upload,
    uploader)

export default uploadRoute;