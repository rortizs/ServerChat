import { Server as socketServer } from "socket.io";

export let io = null;

// Initialize the socket server
export function initSocketServer(server) {
  io = new socketServer(server, {
    cors: {
      origin: "*",
    },
  });
}
