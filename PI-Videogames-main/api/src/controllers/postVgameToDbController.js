require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Videogame } = require("../db");

const postVgameToDbController = async (body) => {
  const { Genres } = body;

  const result = await Videogame.create({
    name: body.Nombre,
    description: body.Descripcion,
    platforms: body.Plataformas,
    background_image: body.Imagen,
    released: body.Fecha_lanzamiento,
    rating: body.Rating,
  });
  await result.addGenres(Genres);
  return result;
};

module.exports = postVgameToDbController;

/* 
{
	"Nombre": "Juego de Alexander",
  "Descripcion": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "Plataformas": "XBOX",
  "Imagen": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
  "Fecha_lanzamiento": "2013-09-17",
  "Rating": 4.47,  
  "Genres": 1
}
*/
