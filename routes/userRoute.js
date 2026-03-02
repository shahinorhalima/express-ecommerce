import express from "express";
import userControllers from "../controller/userController.js";
const router = express.Router();

router.post("/", userControllers.registeruserController);

// export
export default router;
