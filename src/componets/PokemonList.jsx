import React from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/pokemonList";
import styled from "styled-components";

const PokemonListStyled = styled.div`
  margin: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #ededed;
  border-radius: 30px;
  .card-list {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem;
  }
`;
const PokemonList = ({ addMyPokemonId }) => {
  return (
    <>
      <PokemonListStyled>
        <div className="card-list">
          {MOCK_DATA.map((pokemon) => {
            return (
              <PokemonCard
                pokemon={pokemon}
                key={pokemon.id}
                cardAction={addMyPokemonId}
                isAdd={true}
              />
            );
          })}
        </div>
      </PokemonListStyled>
    </>
  );
};

export default PokemonList;
