import axios from "./axios";
import { allPokemons, allTypes } from "./Slices";

export const getAllPokemon = async (dispacth) => {
  try {
    const petition = await axios.get("http://localhost:3001/pokemons");
    dispacth(allPokemons(petition?.data));
  } catch (error) {
    return error.response;
  }
};
export async function apiAllTypes(dispatch) {
  try {
    const peticion = await axios.get("http://localhost:3001/types");
    dispatch(allTypes(peticion?.data));
  } catch (error) {
    return error.response;
  }
}
export const getByName = async (dispacth, name) => {
  try {
    const petition = await axios.get(
      `http://localhost:3001/pokemons/name?name=${name}`
    );
    dispacth(allPokemons(petition?.data));
  } catch (error) {
    return error.response;
  }
};
export async function apiPostPokemon(newPokemon) {
  return await axios.post("http://localhost:3001/pokemons", {
    ...newPokemon,
    name: newPokemon.name,
    img: newPokemon.img,
    hp: newPokemon.hp,
    attack: newPokemon.attack,
    defense: newPokemon.defense,
    speed: newPokemon.speed,
    height: newPokemon.height,
    weight: newPokemon.weight,
    types: newPokemon.types,
  },);
}
