import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMyPokemonId,
  removeMyPokemonId,
} from "../redux/slices/myPokemonListSlice";
import styled from "styled-components";
const ButtonColorStyled = styled.div`
  .card-action-btn {
    background-color: ${({ $buttonColor }) => $buttonColor};
    transition: 0.2s;
  }
  button:hover {
    background-color: #793434;
  }
`;

//추가/삭제 버튼을 리턴하는 컴포넌트
//버튼색상을 제외한 크기 및 디자인은 호출하는 컴포넌트에서 지정 className="card-action-btn"
const PokemonCardActionBtn = ({ pokemonId }) => {
  const disPatch = useDispatch();
  const myPokemonList = useSelector((state) => state.myPokemonList);

  //버튼기본값 myPokemonList가 가득차있으면 '추가'버튼 > 'X'로 표시
  const buttonAction = {
    text: myPokemonList.length === 6 ? "X" : "추가",
    buttonColor: "red",
    action: () => {
      disPatch(addMyPokemonId(pokemonId));
    },
  };

  //myPokemonList에 들어있는 포켓몬이면 '삭제' 버튼으로 동작
  if (myPokemonList.includes(pokemonId)) {
    buttonAction.text = "삭제";
    buttonAction.buttonColor = "#a07474";
    buttonAction.action = () => {
      disPatch(removeMyPokemonId(pokemonId));
    };
  }

  return (
    <ButtonColorStyled $buttonColor={buttonAction.buttonColor}>
      <button className="card-action-btn" onClick={buttonAction.action}>
        {buttonAction.text}
      </button>
    </ButtonColorStyled>
  );
};

export default PokemonCardActionBtn;
