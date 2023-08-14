require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const getGenresApiController = async () => {
  const result = await axios
    .get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    .then((response) => {
      return response.data.results;
    })
    .catch((err) => {
      return { err: err.message };
    });
  return result;
};

module.exports = getGenresApiController;
