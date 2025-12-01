import { Router } from "express";
import { searchCity } from "../controllers/searchController.js";
import { getAqiByCoords } from "../controllers/coordController.js";
import { getIndiaPatterns } from "../controllers/patternController.js";
import { getExploreData } from "../controllers/exploreController.js";

const router = Router();

router.get("/search", searchCity);
router.get("/coords", getAqiByCoords);
router.get("/patterns/india", getIndiaPatterns);
router.get("/", getExploreData);

export default router;
