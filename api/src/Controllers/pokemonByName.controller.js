const { getAllPokemon } = require("../Helpers/apiInfo");

const getByName = async (req, res) => {
  try {
    const { name } = req.query;
    const allPokesName = await getAllPokemon();
    let pokemon = allPokesName.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    if (pokemon.length === 0) {
      return res.status(404).send("This pokemon not exit");
    } else {
      res.status(200).send(pokemon);
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
module.exports = { getByName };
