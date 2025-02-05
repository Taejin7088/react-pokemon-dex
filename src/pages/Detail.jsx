import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const DetailStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vh;
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
  .pokemon-name {
    color: red;
    font-size: 40px;
    font-weight: 900;
  }
  .pokemon-info-text {
    font-size: 20px;
  }
  button {
    height: 40px;
    width: 100px;
    border-radius: 5px;
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

//포켓몬 상세 정보를 표시하기 위한 페이지
const Detail = () => {
  //디테일페이지로 넘길때 마이포켓몬배열에 해당 아이디가 있으면 false보내서 버튼 안뜨게

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  //name(포켓몬이름), no(포멧팅된id값), img_url(포켓몬이미지url), types(포켓몬타입), description(상세정보) 전달
  const pokemonName = queryParams.get("name");
  const pokemonImg_url = queryParams.get("img_url");
  const pokemonTypes = queryParams.get("types");
  const pokemonDescription = queryParams.get("description");

  const navigate = useNavigate();
  return (
    <>
      <DetailStyled>
        <div className="pokemon-info">
          <div>
            <img src={pokemonImg_url} alt={pokemonName + "이미지"} />
          </div>
          <div className="pokemon-name">{pokemonName}</div>
          <div className="pokemon-info-text"> 타입 : {pokemonTypes}</div>
          <div className="pokemon-info-text">{pokemonDescription}</div>
          <button
            onClick={() => {
              navigate("/dex");
            }}
          >
            뒤로가기
          </button>
        </div>
      </DetailStyled>
    </>
  );
};

export default Detail;
