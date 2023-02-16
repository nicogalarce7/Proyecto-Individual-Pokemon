const { getAllPokemon } = require("../Helpers/apiInfo");

const getPokemons = async (req, res) => {
  try {
    let pokemons = await getAllPokemon();
    return res.status(200).send(pokemons);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports={getPokemons}