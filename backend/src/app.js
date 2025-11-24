import express from "express";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("Server is running");
});


export default app;
