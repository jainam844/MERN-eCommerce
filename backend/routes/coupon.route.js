import express from "express";
import { protectRoute } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/", protectRoute, getCoupon);


export default router;