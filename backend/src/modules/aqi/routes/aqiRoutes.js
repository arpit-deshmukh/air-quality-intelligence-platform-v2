import { Router } from "express";
import { getLiveAQI } from "../controllers/liveController.js";

const router = Router();

router.get("/live", getLiveAQI);

export default router;
