import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";

const initialState = {
  allpokemons: [],
  pokemonFilter: [],
  type: [],
  error: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    allPokemons(state, action) {
      state.allpokemons = action.payload;
      state.pokemonFilter = action.payload;
    },
    allTypes(state, action) {
      state.type = action.payload;
    },
    filterbyTypes(state, { payload }) {
      const allpokemons = state.allpokemons;
      let typeFiltered =
        payload === "all"
          ? allpokemons
          : allpokemons.filter((e) => e.types?.some((e) => e.name.trim() === payload));
      if (typeFiltered.length <= 0) {
        typeFiltered =  allpokemons
        swal({
          width:"500px",
          allowOutsideClick:false,
          icon:"error",
          text: '"There are no pokemon of the indicated type"!',
        })
      }
      state.pokemonFilter = typeFiltered;
    },
    filterByCreated(state, { payload }) {
      const pokemons = state.pokemonFilter;
      let filter = 
      payload === "all" 
      ? pokemons 
      : pokemons.filter((el) =>  el?.is_Db === Boolean(payload));
      if (pokemons.length <= 0) {
        filter =  pokemons
        swal({
          width:"500px",
          allowOutsideClick:false,
          icon:"error",
          text: '"There are no pokemon of the indicated type"!',
        })
      }
      state.pokemonFilter = filter;
    },
    sortByAsc(state, { payload }) {
      const sortedName =
        payload === "asc"
          ? state.pokemonFilter.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : state.pokemonFilter.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
              }
              return 0;
            });
      state.pokemonFilter = sortedName;
    },
    sortByAttack(state, { payload }) {
      const sortbyAttack =
        payload === "min"
          ? state.pokemonFilter.sort(function (a, b) {
              if (a.attack > b.attack) {
                return 1;
              }
              if (b.attack > a.attack) {
                return -1;
              }
              return 0;
            })
          : state.pokemonFilter.sort((a, b) => {
              if (a.attack > b.attack) {
                return -1;
              }
              if (b.attack > a.attack) {
                return 1;
              }
              return 0;
            });
      state.pokemonFilter = sortbyAttack;
    },
  },
});
export const {
  allPokemons,
  filterbyTypes,
  allTypes,
  filterByCreated,
  sortByAsc,
  sortByAttack,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
