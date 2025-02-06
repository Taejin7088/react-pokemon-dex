import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";

const DexStyled = styled.div`
  background-color: #fadac1;
  padding-top: 10px;
  .card-list {
    justify-content: space-evenly;
    display: flex;
    flex-wrap: wrap;
    margin: 2rem;
  }
  .card {
    background-color: white;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 280px;
    cursor: pointer;
    transform: 0.3s;
  }
  .pokemonBall {
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
  .pokemon-name {
    font-weight: 700;
    font-size: 17px;
  }
  .pokemonBall img {
    width: 100px;
    height: 100px;
    background-color: transparent;
  }
`;

const Dex = () => {
  return (
    <>
      <DexStyled>
        <div>
          {/* 선택한 포켓몬리스트 Card를 표시하는 컴포넌트 */}
          <Dashboard />
        </div>
        <div>
          {/* 전체 포켓몬리스트 Card를 표시하는 컴포넌트 */}
          <PokemonList />
        </div>
      </DexStyled>
    </>
  );
};

export default Dex;
