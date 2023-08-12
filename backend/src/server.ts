import express from "express";
import cors from "cors";
import { router } from "./routes";
import "./database/prisma";
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
const corsOptions = {
    origin: process.env.ALLOWED_ORIGIN,
    optionsSuccessStatus: 200,
    methods: "GET, PUT, POST, DELETE"
}


app.use(cors(corsOptions))
app.use(express.json())
app.use(router);

app.listen(PORT, () => console.log("🖥️  Server is running!"))