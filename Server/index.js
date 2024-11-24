import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// Middleware for parsing JSON
app.use(express.json());
app.use(cors());
app.use(express.static("data"));

import missionRoutes from "./routes/missions.js";

// Basic Route
app.use("/missions", missionRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
