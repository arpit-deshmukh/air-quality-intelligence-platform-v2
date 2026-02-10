import app from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { logger } from "./utils/logger.js";

connectDB(process.env.MONGO_URI);

app.listen(env.port, () => {
  logger.info(`AQI Store Backend running on port ${env.port}`);
});