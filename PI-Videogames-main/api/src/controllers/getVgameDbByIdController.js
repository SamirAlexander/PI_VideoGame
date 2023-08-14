require("dotenv").config();
const axios = require("axios");
//const Videogame = require("../models/Videogame.js");
const { API_KEY } = process.env;

const { Videogame, Genres } = require("../db.js");

const getVgameDbByIdController = async (idVideogame) => {
  const result = await Videogame.findByPk(idVideogame, {
    include: {
      model: Genres,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return { err: err.message };
    });
  return result;
};

module.exports = getVgameDbByIdController;
