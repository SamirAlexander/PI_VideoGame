const router = require("express").Router();
const getGenresApiController = require("../controllers/getGenresApiController");
/* require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env; */
const { Genres } = require("../db");

router.get("/genres", (req, res) => {
  const result = getGenresApiController()
    .then((response) => {
      res.status(200).json({ Message: "Se creo Correctamente" });
      response.map((e) => {
        Genres.create({
          name: e.name,
        })
          .then(() => {
            console.log("Se Creo Correctamente");
          })
          .catch((err) => {
            console.log(`Hubo Problemas ${err}`);
          });
      });
    })
    .catch((err) => {
      res.status(400).json({ err: err.message });
    });
});

module.exports = router;
