const router = require("express").Router();
const postVgameToDbController = require("../controllers/postVgameToDbController");

require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

router.post("/videogames", (req, res) => {
  const body = req.body;
  try {
    const result = postVgameToDbController(body)
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => {
        res.status(400).json({ err: err.message });
      });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

module.exports = router;
