const axios = require("./axios.js");
const { Pokemon, Type } = require("../db");

const getbyName = async (name) => {
  const nombre = name.toLowerCase(); 
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
    const pokemon = await axios.get(url);
    if (pokemon)
      return {
        id: pokemon.data.id,
        name: pokemon.data.name,
        img: pokemon.data.sprites.other.home.front_default,
        types: pokemon.data.types.map((e) => {
          return {
            name: e.type.name,
            img: `https://typedex.app/images/ui/types/dark/${e.type.name}.svg`,
          };
        }),
        hp: pokemon.data.stats[0].base_stat,
        attack: pokemon.data.stats[1].base_stat,
        defense: pokemon.data.stats[2].base_stat,
        speed: pokemon.data.stats[5].base_stat,
        height: pokemon.data.height,
        weight: pokemon.data.weight,
      };
    if (!pokemon) {
      const getDbInfo = async (name) => {
        return await Pokemon.findAll({
            where:{
              name:name
            },
            include: {
            model: Type,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        });
      };
    }
  } catch (error) {
    return error.message
  }
};

module.exports = { getbyName };
