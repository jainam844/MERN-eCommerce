import express from "express";
import { addTocart } from "../controllers/cart.controller.js";

const router = express.Router();

router.post("/", addTocart);


export default router;