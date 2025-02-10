import { Link, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import PokemonCardActionBtn from "../components/PokemonCardActionBtn";
import { useSelector } from "react-redux";
import Dashboard from "../components/Dashboard";

const DetailStyled = styled.div`
  .bg-box {
    position: absolute;
    z-index: -1;
    width: 100%;
    min-height: 100%;
    background-image: url("/images/detail-background.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    filter: brightness(40%);
  }
  .page-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pokemon-info {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
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
    color: #efeded;
    font-size: 20px;
    font-weight: 500;
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

  .pokemonBall img {
    width: 50px;
    height: 50px;
  }
  .button-area {
    display: flex;
    gap: 30px;
  }
  button {
    height: 60px;
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
  .dash-board {
    width: 700px;
    justify-content: center;
    align-items: center;
  }
  .card {
    background-color: white;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    cursor: pointer;
    transform: 0.3s;
  }
  .pokemonBall {
    background-color: white;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    margin: 5px;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

//포켓몬 상세 정보를 표시하기 위한 페이지
const Detail = () => {
  window.scrollTo(0, 0);
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
        <div className="bg-box"></div>
        <div className="page-layout">
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
          </div>
          <div className="dash-board">
            <Dashboard />
          </div>
        </div>
      </DetailStyled>
    </>
  );
};

export default Detail;
