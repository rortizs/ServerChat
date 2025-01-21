import express from "express";
import bodyParser from "body-parser"; // for parsing incoming request bodies
import cors from "cors"; // for enabling cross-origin resource sharing
import http from "http";
import morgan from "morgan"; // for logging
import { fileURLToPath } from "url";
import { dirname } from "path"; // for getting the directory name of the current module
import path from "path";
import { initSocketServer} from './utils/index.js'; // import utils

//todo: pending routes import
import {authRoutes, userRoutes, chatRoutes, chatMessagesRoutes, groupRoutes, groupMessagesRoutes, notificationRoutes} from './routes/index.js'; // import the routes

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import exp from "constants"; // import the routes

const app = express();
const server = http.createServer(app);
initSocketServer(server);

//configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//configure static folders
app.use(
  '/uploads/audios',
  express.static(path.join(__dirname, 'uploads/audios'))
);

app.use(
  "/uploads/documents",
  express.static(path.join(__dirname, "uploads/documents"))
);

app.use(
  "/uploads/groups",
  express.static(path.join(__dirname, "uploads/groups"))
);

app.use(
  "/uploads/images",
  express.static(path.join(__dirname, "uploads/images"))
);

app.use(
  "/uploads/videos",
  express.static(path.join(__dirname, "uploads/videos"))
);

//configure cors
app.use(cors());

//configure logging
app.use(morgan("dev"));

//configure url  routes and endpoints
//https://chatendpint.digicom.com.gt/api/auth/login
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", chatRoutes);
app.use("/api", chatMessagesRoutes);
app.use("/api", groupRoutes);
app.use("/api", groupMessagesRoutes);
app.use("/api", notificationRoutes);


export {server }; 

