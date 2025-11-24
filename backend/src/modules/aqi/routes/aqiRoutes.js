import { Router } from "express";
import { getLiveAQI } from "../controllers/liveController.js";
import { getAQIHistory } from "../controllers/historyController.js";
import { compareCities } from "../controllers/compareController.js";

const router = Router();

router.get("/live", getLiveAQI);
router.get("/history", getAQIHistory);
router.get("/compare", compareCities);

export default router;
