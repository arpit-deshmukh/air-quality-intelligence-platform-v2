import mongoose from "mongoose";

const aqiRecordSchema = new mongoose.Schema(
    {
        city: { type: String, required: true },
        aqi: Number,
        pm25: Number,
        pm10: Number,
        no2: Number,
        so2: Number,
        o3: Number,
        co: Number,
        source: String
    },
    { timestamps: true }
);

export default mongoose.model("AQIRecord", aqiRecordSchema);
