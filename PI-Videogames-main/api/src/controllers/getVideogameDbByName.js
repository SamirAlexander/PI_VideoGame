require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Videogame, Genres } = require("../db.js");
const { where, Op } = require("sequelize");

const getVideogameDbByName = async (name) => {
  const result = await Videogame.findAll({
    include: {
      model: Genres,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
    where: {
      name: { [Op.iLike]: `%${name}%` },
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

module.exports = getVideogameDbByName;

/* 
{
      include: {
        model: Genres,
        attributes: ["Nombre"],
        through: {
          attributes: [],
        },
      },
    }
*/
