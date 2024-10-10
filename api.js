const express = require("express");
const cors = require("cors");


const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

// records of vehicles object
const vehicles = [
  {
    vehicle_id: 132456,
    type: "Scooter",
    is_locked: true,
    current_speed: 0,
    battery_level: 100,
    status: "PARKING",
    location: 3.142012,
    last_updated: "2019-07-02 9.00AM",
  },
  {
    vehicle_id: 987654,
    type: "Scooter",
    is_locked: false,
    current_speed: 5,
    battery_level: 75,
    status: "MOVING",
    location: 2.125114,
    last_updated: "2019-07-02 10.00AM",
  },
  {
    vehicle_id: 569825,
    type: "Scooter",
    is_locked: false,
    current_speed: 0,
    battery_level: 50,
    status: "IDLING",
    location: 4.125114,
    last_updated: "2019-07-02 10.00AM",
  },
  {
    vehicle_id: 125864,
    type: "Scooter",
    is_locked: true,
    current_speed: 0,
    battery_level: 15,
    status: "TOWING",
    location: 5.125114,
    last_updated: "2019-07-02 10.00AM",
  },
  {
    vehicle_id: 125864,
    type: "Scooter",
    is_locked: true,
    current_speed: 0,
    battery_level: 0,
    status: "TOWING",
    location: 5.125114,
    last_updated: "2019-07-02 10.00AM",
  },
];

// GET endpoint
app.get("/api/vehicles", (req, res) => {
    res.status(200).json({
        status: 'success',
            vehicles: vehicles, 
    });
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
