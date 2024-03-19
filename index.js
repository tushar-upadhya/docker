const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json(
    {
      id: 1,
      name: "tushar upadhyay",
    },
    {
      id: 2,
      name: "somu upadhyay",
    },
    {
      id: 3,
      name: "upadhyay",
    }
  );
});

app.listen(5000, () => {
  console.log("5000:", 5000);
});
