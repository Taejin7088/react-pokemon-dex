import { configureStore } from "@reduxjs/toolkit";
import myPokemonListSlice from "../slices/myPokemonListSlice";
import { enableMapSet } from "immer";
enableMapSet();
const store = configureStore({
  reducer: {
    myPokemonList: myPokemonListSlice,
  },
});
export default store;
