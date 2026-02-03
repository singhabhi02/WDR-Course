const express = require("express");
const router = express.Router();

router.get("/allusers", (req, res) => {
  res.send("All users");
});

router.get("/profile", (req, res) => {
  res.send("User Profile");
});

module.exports = router;
