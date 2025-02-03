import React from "react";
import styled from "styled-components";

const PokemonCardStyled = styled.div``;

// {
//   img_url:
//     "httpsng",
//   korean_name: "파이리",
//   types: ["불꽃"],
//   id: 4,
//   description: "불꽃 타입의 포켓몬으로, 꼬리에 불이 붙어 있습니다.",
// },

const PokemonCard = ({ pokemon }) => {
  const paddedId = (pokemon.id + "").padStart(3, "0");
  return (
    <>
      <div className="card">
        <img src={pokemon.img_url} alt="포켓몬이미지" />
        <div className="pokemon-name">{pokemon.korean_name}</div>
        <div className="pokemon-num">No. {paddedId}</div>
        <button>추가</button>
      </div>
    </>
  );
};

export default PokemonCard;
