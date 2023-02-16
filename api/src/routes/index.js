const { Router } = require('express');
const routespokemon = require("./routes.pokemon");
const routestype = require("./routes.types");

const router = Router();

router.use('/pokemons', routespokemon);
router.use('/types', routestype)


module.exports = router;
