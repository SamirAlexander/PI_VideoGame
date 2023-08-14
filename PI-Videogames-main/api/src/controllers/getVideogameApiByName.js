require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const getVideogameApiByName = async (name, sendLength) => {
  const result = await axios
    .get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)
    .then((response) => {
      return response.data.results;
    })
    .catch((err) => {
      return { err: err.message };
    });
  if (result.length === 0) {
    return `${name} No Found`;
  } else {
    return result.slice(0, 15 - sendLength);
  }
};

module.exports = getVideogameApiByName;
