import express from "express";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";

import aqiRoutes from "./modules/aqi/routes/aqiRoutes.js";
import exploreRoutes from "./modules/explore/routes/exploreRoutes.js";
import metaRoutes from "./modules/meta/routes/metaRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.use("/api/aqi", aqiRoutes);
app.use("/api/explore", exploreRoutes);
app.use("/api/meta", metaRoutes);

// app.get("/", (req, res) => {
//     res.send("Server is running");
// });





export default app;
