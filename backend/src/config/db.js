import mongoose from "mongoose";

// Main AQI database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" MongoDB Connected (AQI)");
  } catch (error) {
    console.error(" DB Connection Error:", error.message);
    process.exit(1);
  }
};

// Store database connection
const connectStoreDB = async () => {
  try {
    const storeConnection = mongoose.createConnection(process.env.STORE_MONGO_URI);
    storeConnection.name = 'store'; // Name the connection
    console.log(" MongoDB Connected (Store)");
    return storeConnection;
  } catch (error) {
    console.error(" Store DB Connection Error:", error.message);
    throw error;
  }
};

export default connectDB;
export { connectStoreDB };
