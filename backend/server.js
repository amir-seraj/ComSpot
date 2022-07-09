import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || process.env.PORT_API;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is listening on port${port}`);
});
