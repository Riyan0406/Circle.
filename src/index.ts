import { AppDataSource } from "./data-source";
import * as express from "express";
import Routes from "./route";
import path = require("path");
import cors = require("cors");
import { config as dotenvConfig } from "dotenv";
import workers from "./workers";
import EventEmitter = require("events");

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = 3002;
    app.use(cors());
    dotenvConfig();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/api/v1", Routes);
    const uploadsDirectory = path.resolve(__dirname, "src/uploads");
    app.use("/uploads", express.static(uploadsDirectory));

    const eventEmitter = new EventEmitter();
    Routes.get(
      "/notifications",
      (req: express.Request, res: express.Response) => {
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Connection", "keep-alive");

        eventEmitter.on("message", (data) => {
          res.write(`data: ${JSON.stringify(data)}\n\n`);
        });
      }
    );
    Routes.get("/new-thread", (req: express.Request, res: express.Response) => {
      const newThread = { message: "New thread!" };

      eventEmitter.emit("message", newThread);

      res.sendStatus(200);
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}.`);
    });
    workers;
  })
  .catch((error) => console.log(error));
