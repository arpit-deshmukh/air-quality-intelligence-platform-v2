import { Router } from "express";
import { searchCity } from "../controllers/searchController.js";
import { getAqiByCoords } from "../controllers/coordController.js";
import { getIndiaPatterns } from "../controllers/patternController.js";

const router = Router();

router.get("/search", searchCity);
router.get("/coords", getAqiByCoords);
router.get("/patterns/india", getIndiaPatterns);

export default router;
