const { Router } = require("express");
const {postPokemon} = require("../Controllers/PostNewPokemon.controller")
const {getPokemons} = require("../Controllers/allPokemons.controller");
const {getByName} = require("../Controllers/pokemonByName.controller");
const { pokeId } = require("../Controllers/pokeId.controller");
const router = Router();

router.get("/", getPokemons)
router.get("/name", getByName);
router.get("/id/:id",pokeId);
router.post("/", postPokemon)

module.exports = router;
