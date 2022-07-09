import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || process.env.PORT_API;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("DB Connection Failed!");
    console.error(error);
  });
