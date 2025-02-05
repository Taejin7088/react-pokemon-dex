import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addMyPokemonId,
  removeMyPokemonId,
} from "../redux/slices/myPokemonListSlice";
import styled from "styled-components";
const PokemonCardActionBtnStyled = styled.div`
  button {
    background-color: red;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    height: 30px;
    width: 60px;
    margin-bottom: 10px;
    flex-grow: 1;
    transition: 0.3s;
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
    action: () => {
      disPatch(addMyPokemonId(pokemonId));
    },
  };

  if (myPokemonList.includes(pokemonId)) {
    buttonAction.text = "삭제";
    buttonAction.action = () => {
      disPatch(removeMyPokemonId(pokemonId));
    };
  }

  return (
    <PokemonCardActionBtnStyled>
      <button onClick={buttonAction.action}>{buttonAction.text}</button>
    </PokemonCardActionBtnStyled>
  );
};

export default PokemonCardActionBtn;
