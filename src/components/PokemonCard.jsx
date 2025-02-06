import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  addMyPokemonId,
  removeMyPokemonId,
} from "../redux/slices/myPokemonListSlice";
import PokemonCardActionBtn from "./PokemonCardActionBtn";

const PokemonCardStyled = styled.div`
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.3);
  }
  .pokemon-img {
    flex-grow: 2;
  }
  .pokemon-name {
    flex-grow: 1;
  }
  .pokemon-num {
    flex-grow: 1;
  }
  button {
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    height: 30px;
    width: 60px;
    margin-bottom: 10px;
    flex-grow: 1;
  }
`;
//포켓몬 카드 표시를 위한 부분
const PokemonCard = ({ pokemon, isRemove }) => {
  const navigate = useNavigate();

  //숫자 "001"의 형식을 저장하는 변수
  const paddedId = (pokemon.id + "").padStart(3, "0");

  //카드 클릭시 detail페이지에 querySting을 넘겨주기 위한변수
  //name(포켓몬이름), id(포켓몬id값), img_url(포켓몬이미지url), types(포켓몬타입), description(상세정보) 전달
  const detailPageQueryString = `/detail?name=${pokemon.korean_name}&id=${pokemon.id}&img_url=${pokemon.img_url}&types=${pokemon.types}&description=${pokemon.description}`;

  return (
    <>
      <PokemonCardStyled>
        <div
          className="card"
          onClick={(e) => {
            if (e.target.className === "card-action-btn") {
              return;
            }
            navigate(detailPageQueryString);
          }}
        >
          <img
            className="pokemon-img"
            src={pokemon.img_url}
            alt={pokemon.korean_name + "이미지"}
          />
          <div className="pokemon-name">{pokemon.korean_name}</div>
          <div className="pokemon-num">No. {paddedId}</div>
          {/* 추가/삭제 버튼을 리턴하는 컴포넌트 */}
          <PokemonCardActionBtn pokemonId={pokemon.id} isRemove={isRemove} />
        </div>
      </PokemonCardStyled>
    </>
  );
};

export default PokemonCard;
