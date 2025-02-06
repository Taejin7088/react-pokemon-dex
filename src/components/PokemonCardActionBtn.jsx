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
const PokemonCardActionBtn = ({ pokemonId, isRemove }) => {
  const disPatch = useDispatch();
  const myPokemonList = useSelector((state) => state.myPokemonList);

  //버튼기본값 myPokemonList가
  const buttonAction = {
    text: "추가",
    buttonColor: "red",
    action: () => {
      disPatch(addMyPokemonId(pokemonId));
    },
  };

  //가득차있으거나 포함되어 있으면 '추가'버튼 > 'X'로 표시만 전환
  if (myPokemonList.length === 6 || myPokemonList.includes(pokemonId)) {
    buttonAction.text = "X";
    buttonAction.buttonColor = "gray";
  }

  //isRemove가 true면 삭제표시 및 기능전환
  if (isRemove) {
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
