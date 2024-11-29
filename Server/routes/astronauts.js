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

// // Route to get a specific item by ID
// router.get("/:id", (req, res) => {
//   const file = readDataFromFile();
//   const item = file.find((i) => i.id === parseInt(req.params.id));

//   if (item) {
//     res.status(200).json(item);
//   } else {
//     res.status(404).json({ message: "Item not found" });
//   }
// });

export default router;
