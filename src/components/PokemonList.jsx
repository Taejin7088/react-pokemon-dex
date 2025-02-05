import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../data/pokemonList";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addMyPokemonId } from "../redux/slices/myPokemonListSlice";

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

//전체 포켓몬 리스트 Card를 출력하는 컴포넌트
const PokemonList = () => {
  const disPatch = useDispatch();
  return (
    <>
      <PokemonListStyled>
        <div className="card-list">
          {/* 전체 포켓몬 리스트에서 각각의 포켓몬 정보를 PokemonCard에 전달*/}
          {/* cardAction={addMyPokemonId} => 추가/삭제 기능을 구별하기 위한 요소 */}
          {/* isAdd={true} 카드 버튼에서 추가/삭제 텍스트를 구별하기 위한 요소 */}
          {MOCK_DATA.map((pokemon) => {
            return (
              <PokemonCard
                pokemon={pokemon}
                key={pokemon.id}
                cardAction={() => {
                  disPatch(addMyPokemonId(pokemon.id));
                }}
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
