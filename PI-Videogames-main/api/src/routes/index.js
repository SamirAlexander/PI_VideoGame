const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getVideogames = require("../routes/getVideogames");
const getVideogameById = require("../routes/getVideogameById");
const getGenres = require("../routes/getGenres");
const postVgameToDB = require("./postVgameToDB");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use(getVideogames);
router.use(getVideogameById);
router.use(getGenres);
router.use(postVgameToDB);

module.exports = router;
