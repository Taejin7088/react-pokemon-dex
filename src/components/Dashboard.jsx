import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/pokemonList";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const Dashboard = () => {
  const myPokemonIdList = useSelector((state) => state.myPokemonList);

  //전체데이터에서 myPokemonIdList의 id를 빠르게 비교해서 찾기위해 Map사용
  const MOCK_DATAMap = useMemo(() => {
    return new Map(MOCK_DATA.map((pokemon) => [pokemon.id, pokemon]));
  }, []);

  //myPokemonIdList의 ID랑 MOCK_DATAMap key를 비교해서 일치하는 마이포켓몬배열생성
  const myPokemonList = myPokemonIdList.map((id) => {
    return MOCK_DATAMap.get(id);
  });

  //비어있는 카드표시를 위한 배열
  //myPokemonList의 길이를 뺀 배열을 만들어 '선택포켓몬카드 + 비어있는카드' 개수 6개 유지
  const pokemonBallCounts = [...Array(6 - myPokemonList.length).keys()];
  return (
    <>
      <MyPokemonListStyled>
        <div className="card-list">
          {/* 전체 포켓몬 리스트에서 각각의 포켓몬 정보를 PokemonCard에 전달*/}
          {myPokemonList.map((pokemon) => {
            return (
              <PokemonCard pokemon={pokemon} key={pokemon.id} isRemove={true} />
            );
          })}
          {/* 비어있는 카드를 그려내는 부분 */}
          {pokemonBallCounts.map((i) => {
            return (
              <div className="pokemonBall" key={i}>
                <img src="/images/pokemon-ball.png" alt="" />
              </div>
            );
          })}
        </div>
      </MyPokemonListStyled>
    </>
  );
};

const MyPokemonListStyled = styled.div`
  margin: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 30px;
  background-color: #ededed;
  .card-list {
    justify-content: space-evenly;
    display: flex;
    flex-wrap: wrap;
    margin: 5px;
    @media (max-width: 1780px) {
      display: grid;
      place-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
    @media (max-width: 951px) {
      display: flex;
    }
  }
`;

export default Dashboard;
