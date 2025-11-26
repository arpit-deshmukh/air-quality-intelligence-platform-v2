import express from "express";
import cors from "cors";

import aqiRoutes from "./modules/aqi/routes/aqiRoutes.js";
import exploreRoutes from "./modules/explore/routes/exploreRoutes.js";
import metaRoutes from "./modules/meta/routes/metaRoutes.js";

import { errorHandler } from "./middleware/errorHandler.js";

const app = express();


//
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);


//routes
app.use("/api/aqi", aqiRoutes);
app.use("/api/explore", exploreRoutes);
app.use("/api/meta", metaRoutes);



// app.get("/", (req, res) => {
//   res.json({ message: "Server is running" });
// });




app.use(errorHandler);

export default app;
