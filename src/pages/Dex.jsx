import React from "react";
import PokemonList from "../componets/PokemonList";
import MyPokemonList from "../componets/MyPokemonList";

const Dex = () => {
  return (
    <>
      <div>
        <MyPokemonList />
      </div>
      <div>
        <PokemonList />
      </div>
    </>
  );
};

export default Dex;
