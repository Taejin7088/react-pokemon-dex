import React, { useState } from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";

const DexStyled = styled.div`
  background-color: #fadac1;
  padding-top: 10px;
`;

const Dex = () => {
  // 마이포켓몬 리스트를 구별할수있는 state를 내려줘야할듯
  // 마이포켓몬 리스트의 조건
  // 일단 배열이 좋을듯
  // 크기가 6이상이면 안됨, 아디값을 저장
  // 마이포켓몬리스트 컴포넌트에서는 여기서 받아온 id값 배열을 기준으로 카드 띄우기
  const [myPokemonIdList, setMyPokemonIdList] = useState(new Set());
  const addMyPokemonId = (id) => {
    if (myPokemonIdList.size >= 6) {
      alert("최대6마리");
      return 0;
    }
    setMyPokemonIdList(new Set([...myPokemonIdList, id]));
  };

  const removeMyPokemonId = (id) => {
    const tempSet = new Set(myPokemonIdList);
    tempSet.delete(id);
    setMyPokemonIdList(tempSet);
  };
  return (
    <>
      <DexStyled>
        <div>
          <Dashboard
            myPokemonIdList={myPokemonIdList}
            removeMyPokemonId={removeMyPokemonId}
          />
        </div>
        <div>
          <PokemonList addMyPokemonId={addMyPokemonId} />
        </div>
      </DexStyled>
    </>
  );
};

export default Dex;
