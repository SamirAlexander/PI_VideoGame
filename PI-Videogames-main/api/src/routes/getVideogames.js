const router = require("express").Router();
const getAllVideogameApiController = require("../controllers/getAllVideogameApiController");
const getVideogameApiByName = require("../controllers/getVideogameApiByName");
const getVideogameDbByName = require("../controllers/getVideogameDbByName");
require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

router.get("/videogames/?", async (req, res) => {
  const { name } = req.query;

  if (name) {
    try {
      const result1 = await getVideogameDbByName(name)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });

      const sendLength = await result1.length;

      const result2 = await getVideogameApiByName(name, sendLength).then(
        (response) => {
          return response;
        }
      );

      const resultCombinated = result1.concat(result2);

      res.status(200).json(resultCombinated);
    } catch (error) {
      res.status(400).json({ err: error.message });
      return error;
    }
  } else {
    try {
      const result3 = getAllVideogameApiController().then((response) => {
        res.status(200).json(response);
      });
    } catch (error) {
      res.status(400).json({ err: error.message });
    }
  }
});

module.exports = router;

//http://localhost:3001/videogames/?name=duty
