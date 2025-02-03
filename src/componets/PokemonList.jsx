import React from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/pokemonList";
import styled from "styled-components";

const PokemonListStyled = styled.div`
  background-color: #ededed;
  .card-list {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem;
  }
`;
const PokemonList = () => {
  return (
    <>
      <PokemonListStyled>
        PokemonList
        <div>모든포켓몬을 기준으로한 리스트 띄우기</div>
        <div className="card-list">
          {MOCK_DATA.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
          })}
        </div>
      </PokemonListStyled>
    </>
  );
};

export default PokemonList;
