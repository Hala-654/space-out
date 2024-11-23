import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = 3000;

// Middleware for parsing JSON
app.use(express.json());

app.use(cors());

// Basic Route
app.get("/", (req, res) => {
  res.send("Hello, Backend is running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
