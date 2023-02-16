const axios = require("./axios.js");
const { Pokemon, Type } = require("../db");

const getApiInfo = async () => {
  try {
    let url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40";
    let info = await axios.get(url);
    let pokemonesApi = info.data;
    let auxPokemones = pokemonesApi.results.map((e) => {
      return {
        name: e.name,
        url: e.url,
      };
    });
    let pokesWithData = await Promise.all(
      auxPokemones.map(async (e) => {
        let pokemon = await axios.get(e.url);
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
          is_default : pokemon.data.is_default,
        };
      })
    );
    return pokesWithData;
  } catch (e) {
  console.log(e);
   }
};

  const getDbInfo = async () => {
    return await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
  };

  const getAllPokemon = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getDbInfo();
    const allPokemon = apiInfo.concat(dbInfo);
    return allPokemon;
  };

  const getAllTypes = async () => {
    const types = axios.get("https://pokeapi.co/api/v2/type");
    return types;
  };

  module.exports = {
    getApiInfo,
    getDbInfo,
    getAllPokemon,
    getAllTypes,
  };
