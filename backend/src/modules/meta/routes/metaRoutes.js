import { Router } from "express";
import { getPollutantsInfo } from "../controllers/pollutantInfoController.js";
import { getGuidelines } from "../controllers/guidelinesController.js";
import { getCityModels } from "../controllers/modelsController.js";

const router = Router();

router.get("/pollutants", getPollutantsInfo);
router.get("/guidelines", getGuidelines);
router.get("/models", getCityModels);

export default router;