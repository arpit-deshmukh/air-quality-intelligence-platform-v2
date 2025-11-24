import cron from "node-cron";
import { saveHourlyAqi } from "../modules/aqi/services/historyService.js";

cron.schedule("0 * * * *", async () => {
  console.log("Running hourly AQI cron job...");
  await saveHourlyAqi();
  console.log(" AQI data saved");
});


// cron.schedule("*/1 * * * *", async () => {
//   console.log("⏳ Cron running...");
//   await saveHourlyAqi();
//   console.log("✅ AQI data saved");
// });
