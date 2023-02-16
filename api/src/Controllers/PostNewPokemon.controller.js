const {getAllPokemon} = require("../Helpers/apiInfo");
const { Pokemon, Type } = require("../db");

const postPokemon = async (req, res) => {
    const { name, hp, attack, defense, speed, height, weight, img, types } =
      req.body;
    try {
      if (!name) return res.status(404).send("Pokemon name is obligatory");
      if (name) {
        const allPoke = await getAllPokemon();
        const isPoke = allPoke.find(
          (e) => e.name.toLowerCase() === name.toLowerCase()
        );
        if(isPoke){
          return res.send("Pokemos already exist!")
        }
        if (!isPoke) {
          const pokemon = await Pokemon.create({
            name,
            img,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
          });
          types.map(async d => {
            const type = await Type.findOrCreate({
                where: {
                    name: d
                }
            })
            pokemon.addType(type[0]);
        })
        return res.status(200).send(pokemon)
        }
      } 
    } catch (error) {
      return res.status(500).send(error.message)
    }
}
module.exports={postPokemon};