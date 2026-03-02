import express from "express";
import brandControllers from "../controller/brandController.js";
import cloudinaryStorage from "../config/cloudinary.js";
const router = express.Router();

router.post(
  "/",
  cloudinaryStorage.single("brandLogo"),
  brandControllers.createbrandController,
);

// export routes
export default router;
