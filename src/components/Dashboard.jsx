import React from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/pokemonList";
import styled from "styled-components";

const MyPokemonListStyled = styled.div`
  margin: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 30px;
  background-color: #ededed;
  .card-list {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem;
  }
  .pokeball {
    background-color: white;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    margin: 10px;
    width: 200px;
    height: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pokeball img {
    width: 100px;
    height: 100px;
    background-color: transparent;
  }
`;

const Dashboard = ({ myPokemonIdList, removeMyPokemonId }) => {
  const myPokemonList = MOCK_DATA.filter((pokemon) =>
    myPokemonIdList.has(pokemon.id)
  );

  let pokeballCounts = [...Array(6 - myPokemonList.length).keys()];

  return (
    <>
      <MyPokemonListStyled>
        <div className="card-list">
          {myPokemonList.map((pokemon) => {
            return (
              <PokemonCard
                pokemon={pokemon}
                key={pokemon.id}
                cardAction={removeMyPokemonId}
                isAdd={false}
              />
            );
          })}
          {pokeballCounts.map((i) => {
            return (
              <div className="pokeball" key={i}>
                <img src="../../public/images/pokeball.png" alt="" />
              </div>
            );
          })}
        </div>
      </MyPokemonListStyled>
    </>
  );
};

export default Dashboard;
