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

const PokemonCardActionBtn = ({ pokemonId }) => {
  const disPatch = useDispatch();
  const myPokemonList = useSelector((state) => state.myPokemonList);
  const buttonAction = {
    text: "추가",
    buttonColor: "red",
    action: () => {
      disPatch(addMyPokemonId(pokemonId));
    },
  };

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
