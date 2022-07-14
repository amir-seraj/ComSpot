import cors from "cors";
import { Server } from "socket.io";
export const registerSocketServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });
  io.on("connection", (socket) => {
    console.log("user connected");
    console.log(socket.id);
  });
};
