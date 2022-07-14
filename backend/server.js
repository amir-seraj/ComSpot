import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import http from "http";
dotenv.config();

// App Setup
const app = express();
app.use(express.json());
app.use(cors());

// Auth Routes
import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);

// Socket.io
import { registerSocketServer as socketServer } from "./socketServer.js";
const server = http.createServer(app);
socketServer(server);

// Server and DB
const port = process.env.PORT || process.env.PORT_API;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log("DB Connection Failed!");
    console.error(error);
  });
