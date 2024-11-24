import express from "express";
import fs from "fs";

const router = express.Router();

const missionsFilePath = "./data/mission-data.json";

// reading JSON file
const readDataFromFile = () => {
  const data = fs.readFileSync(missionsFilePath);
  return JSON.parse(data);
};
router.get("/", (req, res) => {
  console.log("GET /mission request received");
  const file = readDataFromFile();

  const nextMission = file.map((mission) => ({
    id: mission.id,
    title: mission.mission_name,
    launch: mission.launch,
    image: mission.patch,
  }));

  console.log("Sending response:", nextMission);
  res.status(200).json(nextMission);
});

export default router;
