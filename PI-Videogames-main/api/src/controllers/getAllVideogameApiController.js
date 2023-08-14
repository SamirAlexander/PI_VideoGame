require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;

const getAllVideogameApiController = async () => {
  const promises = [1, 2, 3, 4, 5].map((numPage) => {
    return axios
      .get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${numPage}`)
      .then((response) => {
        return response.data.results;
      })
      .catch((err) => {
        return { err: err.message };
      });
  });

  const allpromises = Promise.all(promises)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

  return allpromises;
};

module.exports = getAllVideogameApiController;
