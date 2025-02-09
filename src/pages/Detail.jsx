import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import PokemonCardActionBtn from "../components/PokemonCardActionBtn";
import { useSelector } from "react-redux";
import Dashboard from "../components/Dashboard";

const DetailStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #fadac1;
  .pokemon-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }
  img {
    width: 20vh;
    height: 20vh;
  }
  .pokemon-info-name {
    color: red;
    font-size: 40px;
    font-weight: 900;
  }
  .pokemon-info-text {
    font-size: 20px;
  }
  .pokemon-img {
    width: 50%;
    height: auto;
  }
  .pokemon-name {
    font-weight: 700;
    font-size: 17px;
    color: black;
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
    width: 12em;
    height: 14em;
    cursor: pointer;
    transform: 0.3s;
  }
  .pokemonBall {
    background-color: white;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    margin: 10px;
    width: 12em;
    height: 14em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pokemonBall img {
    width: 100px;
    height: 100px;
  }
  .button-area {
    display: flex;
    gap: 30px;
  }
  button {
    height: 80px;
    width: 200px;
    border-radius: 5px;
    border: solid transparent;
    background-color: black;
    color: white;
    cursor: pointer;
  }
  .card button {
    height: 40px;
    width: 100px;
  }
`;

//포켓몬 상세 정보를 표시하기 위한 페이지
const Detail = () => {
  //디테일페이지로 넘길때 마이포켓몬배열에 해당 아이디가 있으면 false보내서 버튼 안뜨게
  const [searchParams] = useSearchParams();
  const myPokemonList = useSelector((state) => state.myPokemonList);

  //name(포켓몬이름), id(포켓몬id값), img_url(포켓몬이미지url), types(포켓몬타입), description(상세정보) 전달
  const pokemonId = +searchParams.get("id");
  const pokemonName = searchParams.get("name");
  const pokemonImg_url = searchParams.get("img_url");
  const pokemonTypes = searchParams.get("types");
  const pokemonDescription = searchParams.get("description");
  const isRemove = myPokemonList.includes(pokemonId);

  return (
    <>
      <DetailStyled>
        <div className="pokemon-info">
          <div>
            <img src={pokemonImg_url} alt={pokemonName + "이미지"} />
          </div>
          <div className="pokemon-info-name">{pokemonName}</div>
          <div className="pokemon-info-text"> 타입 : {pokemonTypes}</div>
          <div className="pokemon-info-text">{pokemonDescription}</div>
          <div className="button-area">
            {/* 추가/삭제 버튼을 리턴하는 컴포넌트 */}
            <PokemonCardActionBtn pokemonId={pokemonId} isRemove={isRemove} />
            <Link to="/dex">
              <button>뒤로가기</button>
            </Link>
          </div>
          <div className="dashBoard">
            <Dashboard />
          </div>
        </div>
      </DetailStyled>
    </>
  );
};

export default Detail;
