import React, { useContext } from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/pokemonList";
import styled from "styled-components";
import { MyPokemonListIdContext } from "../context/MyPokemonListIdContext";

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

const Dashboard = () => {
  // context로 전달받은 props 받아오기
  const { myPokemonIdList, removeMyPokemonId } = useContext(
    MyPokemonListIdContext
  );

  //전체 포켓몬 각각의 id와 myPokemonIdList에 id 값을 비교,
  //일치하는 포켓몬배열(myPokemonList) 생성
  const myPokemonList = MOCK_DATA.filter((pokemon) =>
    myPokemonIdList.has(pokemon.id)
  );

  //비어있는 카드표시를 위한 배열
  //myPokemonList의 길이를 뺀 배열을 만들어 (들어있는카드 + 비어있는카드) 개수 6개 유지
  const pokeballCounts = [...Array(6 - myPokemonList.length).keys()];

  return (
    <>
      <MyPokemonListStyled>
        <div className="card-list">
          {/* 전체 포켓몬 리스트에서 각각의 포켓몬 정보를 PokemonCard에 전달*/}
          {/* cardAction={removeMyPokemonId} => 추가/삭제 기능을 구별하기 위한 요소 */}
          {/* isAdd={false} 카드 버튼에서 추가/삭제 텍스트를 구별하기 위한 요소 */}
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
          {/* 비어있는 카드를 그려내는 부분 */}
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
