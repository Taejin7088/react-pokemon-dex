import React from "react";
import PokemonItem from "./PokemonItem";

const MyPokemonList = () => {
  <>
    PokemonList
    <div>선택한포켓몬을 기준으로한 리스트 띄우기</div>
    <div>
      map으로 선택체크되어있는 포켓몬 item띄우기 최대 6개만 가능하게 해야함
      <br />
      마이 포켓몬 리스트를 따로 만들어서 관리 길이는 최대 6으로
      <PokemonItem />
    </div>
  </>;
};

export default MyPokemonList;
