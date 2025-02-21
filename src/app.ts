import express from "express";
import cors from "cors";
import { integrationSpecSettings } from "./integrationSpec";

const app = express();
const port = 3000;

// Configure CORS to allow all origins
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/integration-spec", (req, res) => {
  res.json(integrationSpecSettings);
});

app.post("/webhook", (req: any, res: any) => {
  const { message, settings } = req.body;
  console.log("settings", settings);
  return res.json({ status: "success", message });
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
