const router = require("express").Router();
const getVideogameApiByIdController = require("../controllers/getVideogameApiByIdController");
const getVgameDbByIdController = require("../controllers/getVgameDbByIdController");
require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

router.get("/videogames/:id", async (req, res) => {
  const { id } = req.params;

  const result1 = await getVgameDbByIdController(id)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

  if (result1.err) {
    const result2 = await getVideogameApiByIdController(id)
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((error) => {
        res.status(400).json({ error: error.message });
      });
  } else {
    res.status(200).json(result1);
  }
});

module.exports = router;
