import express from "express";
import fs from "fs";

const router = express.Router();

const astronautFilePath = "./data/mission-data.json";

// read JSON file
const readDataFromFile = () => {
  const data = fs.readFileSync(astronautFilePath);
  return JSON.parse(data);
};

// Route to get all data
router.get("/", (req, res) => {
  console.log("GET /astronaut request received");
  const file = readDataFromFile();

  const astronautData = file.map((astronaut) => ({
    id: astronaut.id,
    astronaut: astronaut.astronaut,
    image: astronaut.image,
    dob: astronaut.dob,
    from: astronaut.from,
    background: astronaut.background,
    details: astronaut.details,
    missions: astronaut.mission_name,
    patch: astronaut.patch,
    planet: astronaut.planet,
  }));

  console.log("Sending response:", astronautData);
  res.status(200).json(astronautData);
});

export default router;
