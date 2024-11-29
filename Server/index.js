import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());

// get current file path
const __filename = fileURLToPath(import.meta.url);
// get directory name of the current file
const __dirname = path.dirname(__filename);
app.use(express.static("data"));
// Serve the "patches" folder statically
app.use(
  "/astronauts",
  express.static(path.join(__dirname, "data", "astronauts"))
);
app.use("/patches", express.static(path.join(__dirname, "data", "patches")));

// Middleware for parsing JSON
app.use(express.json());

import missionRoutes from "./routes/missions.js";
import astronautsRoutes from "./routes/astronauts.js";
// Basic Route
app.use("/missions", missionRoutes);
app.use("/astronauts", astronautsRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
