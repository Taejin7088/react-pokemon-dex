import React from "react";
import PokemonList from "../componets/PokemonList";
import MyPokemonList from "../componets/MyPokemonList";

const Dex = () => {
  // 마이포켓몬 리스트를 구별할수있는 state를 내려줘야할듯
  // 마이포켓몬 리스트의 조건
  // 일단 배열이 좋을듯
  // 크기가 6이상이면 안됨, 아디값을 저장
  // 마이포켓몬리스트 컴포넌트에서는 여기서 받아온 id값 배열을 기준으로 카드 띄우기
  return (
    <>
      <div>
        <MyPokemonList />
      </div>
      <div>
        <PokemonList />
      </div>
    </>
  );
};

export default Dex;
