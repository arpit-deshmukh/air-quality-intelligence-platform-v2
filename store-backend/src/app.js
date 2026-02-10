import express from "express";
import cors from "cors";

import routes from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFound } from "./middlewares/notFound.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", routes);

app.use(notFound);
app.use(errorHandler);

export default app;