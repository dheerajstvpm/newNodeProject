import express from "express";
import logger from "morgan";
import cors from "cors";
import api from "./api.js";

const app = express();

app.use(logger("dev"));

app.use(cors());

app.use(express.json());

app.use("/api", api);

app.use("/", (req, res) => {
  res.status(404).send({ status: "Invalid route" });
});

app.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.info("server is running in port 4000");
});
