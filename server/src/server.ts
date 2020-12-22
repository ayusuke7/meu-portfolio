import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import routes from "./routes";

dotenv.config();

const app = express();

const PORT: number = parseInt(process.env.PORT as string, 10) || 3333;
const DB: string = process.env.MONGODB_URI || "localhost";

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log("Server started in http://localhost:3333"));
