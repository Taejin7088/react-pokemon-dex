import React from "react";
import { useLocation, useParams } from "react-router-dom";
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

const Detail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pokemonName = queryParams.get("name");
  const pokemonImg_url = queryParams.get("img_url");
  const pokemonTypes = queryParams.get("types");
  const pokemonDescription = queryParams.get("description");
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
          <button>뒤로가기</button>
        </div>
      </DetailStyled>
    </>
  );
};

export default Detail;
