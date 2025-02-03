import React from "react";
import PokemonItem from "./PokemonItem";

const PokemonList = () => {
  return (
    <>
      PokemonList
      <div>모든포켓몬을 기준으로한 리스트 띄우기</div>
      <div>
        map으로 전체 포켓몬 item띄우기
        <PokemonItem />
      </div>
    </>
  );
};

export default PokemonList;
