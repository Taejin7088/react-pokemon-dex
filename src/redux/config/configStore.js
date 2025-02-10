import { configureStore } from "@reduxjs/toolkit";
import myPokemonListSlice from "../slices/myPokemonListSlice";

const store = configureStore({
  reducer: {
    myPokemonList: myPokemonListSlice,
  },
});
export default store;
