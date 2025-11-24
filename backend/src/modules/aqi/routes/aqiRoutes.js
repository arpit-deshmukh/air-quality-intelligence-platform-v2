import { Router } from "express";
import { getLiveAQI } from "../controllers/liveController.js";
import { getAQIHistory } from "../controllers/historyController.js";

const router = Router();

router.get("/live", getLiveAQI);
router.get("/history", getAQIHistory);

export default router;
