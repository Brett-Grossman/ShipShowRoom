import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from "./routes/ship.routes.js";

const app = express();

app.use(express.json(), cors({credentials: true, origin: 'http://localhost:5173'}));
dotenv.config();


app.use("/api", router);

const PORT = process.env.PORT || 8000;
dbConnect();
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);