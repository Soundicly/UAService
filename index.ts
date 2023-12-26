import express from "express";
import { UAParser } from "ua-parser-js";

const app = express();

app.get("/", (req, res) => {
  const ua = (req.query.ua ?? req.headers["user-agent"]) as string;
  const parser = new UAParser(ua);
  const result = parser.getResult();
  res.send(result);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
