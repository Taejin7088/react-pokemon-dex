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
`;

// {
//   img_url:
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//   korean_name: "이상해풀",
//   types: ["풀", "독"],
//   id: 2,
//   description: "이상해씨의 진화형으로, 등에는 꽃봉오리가 있습니다.",
// },
const MyPokemonList = ({ myPokemonIdList }) => {
  const myPokemonList = MOCK_DATA.filter((pokemon) =>
    myPokemonIdList.includes(pokemon.id)
  );

  console.log("myPokemonList", myPokemonList);
  return (
    <>
      <MyPokemonListStyled>
        <div className="card-list">
          {myPokemonList.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
          })}
        </div>
      </MyPokemonListStyled>
    </>
  );
};

export default MyPokemonList;
