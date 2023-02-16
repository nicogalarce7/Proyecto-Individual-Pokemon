const { getAllPokemon } = require("../Helpers/apiInfo");

const pokeId =  async (req, res) => {
    try {
      const { id } = req.params;
      const allPokesId = await getAllPokemon();
      let pokeId = allPokesId.filter((p) => p.id == id);
      return res.status(200).json(pokeId);
    } catch (error) {
      return res.status(500).send(error.message);
    }
};
module.exports={pokeId}