import cors from "cors";
import path from "path";
import express from "express";
import sequenceRouter from "./routes/sequence.route.js";

const app = express();

// Update the CORS configuration to allow requests from localhost:5173
app.use(
  cors({
    origin: "http://localhost:5173", // Update this to the frontend's URL
    credentials: true,
  })
);

app.set("trust proxy", 1);
app.use(express.static("public"));
app.use(express.json({ limit: "16kb" }));

app.use("/api/sequence", sequenceRouter);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

export default app;
