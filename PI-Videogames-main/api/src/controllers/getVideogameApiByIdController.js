require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const getVideogameApiByIdController = async (idVideogame) => {
  const result = await axios
    .get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return { err: err.message };
    });
  return result;
};

module.exports = getVideogameApiByIdController;
