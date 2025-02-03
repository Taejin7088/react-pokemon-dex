import React from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/pokemonList";
const PokemonList = () => {
  return (
    <>
      PokemonList
      <div>모든포켓몬을 기준으로한 리스트 띄우기</div>
      <div>
        {MOCK_DATA.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
        })}
      </div>
    </>
  );
};

export default PokemonList;
