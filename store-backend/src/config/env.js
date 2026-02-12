import dotenv from "dotenv";

dotenv.config();

const required = [
  "PORT",
  "MONGO_URI",
  "JWT_SECRET"
];

required.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing env: ${key}`);
  }
});

export const env = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV || "development"
};