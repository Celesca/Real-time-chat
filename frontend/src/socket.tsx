
import { io, Socket } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "./models/SocketType";

// "undefined" means the URL will be computed from the `window.location` object
const URL:string = "http://localhost:3000"

// please note that the types are reversed
export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(URL);