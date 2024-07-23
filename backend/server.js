import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/users.routes.js"

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);


const PORT = process.env.PORT || 8000;
const MONGODB_URL = process.env.MONGODB_URL;


mongoose.connect(MONGODB_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Database connected and Server listening on ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(`Mongodb Connect error: ${error}`);
    });