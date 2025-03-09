const express = require("express");
const app = express();

app.get("/api/vans", (req, res) => {
  res.json([
    { id: "1", name: "Explorer Van", type: "luxury", price: 100 },
    { id: "2", name: "Desert Rover", type: "rugged", price: 80 },
  ]);
});

app.listen(5000, () => console.log("API running on port 5000"));
