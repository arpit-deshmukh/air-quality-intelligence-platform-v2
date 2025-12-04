
import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";   
import "./cron/fetchAQI.js";

dotenv.config();

// connect database
connectDB();

const port = process.env.PORT || process.env.SERVER_PORT || 5000;

// app.listen(port, () => {
//   console.log(` Server running on port ${port}`);
// });

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${port}`);
});

