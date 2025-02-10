import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";

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

const DexStyled = styled.div`
  background-color: #fadac1;
  padding-top: 10px;
  .pokemonBall {
    background-color: white;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    margin: 10px;
    width: 16em;
    height: 16em;
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
  .card {
    background-color: white;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 16em;
    height: 16em;
    cursor: pointer;
    transform: 0.3s;
  }
  button {
    width: 90px;
    height: 40px;
  }
`;

export default Dex;
