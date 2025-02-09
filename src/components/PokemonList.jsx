import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/pokemonList";
import styled from "styled-components";

//전체 포켓몬 리스트 Card를 출력하는 컴포넌트
const PokemonList = () => {
  return (
    <>
      <PokemonListStyled>
        <div className="card-list">
          {/* 전체 포켓몬 리스트에서 각각의 포켓몬 정보를 PokemonCard에 전달*/}
          {MOCK_DATA.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} key={pokemon.id} />;
          })}
        </div>
      </PokemonListStyled>
    </>
  );
};

const PokemonListStyled = styled.div`
  margin: 30px;
  background-color: #ededed;
  border-radius: 30px;
  .card-list {
    justify-content: space-evenly;
    display: flex;
    flex-wrap: wrap;
    margin: 2rem;
  }
`;

export default PokemonList;
