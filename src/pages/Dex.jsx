import React, { useState } from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";

const DexStyled = styled.div`
  background-color: #fadac1;
  padding-top: 10px;
`;

const Dex = () => {
  //선택하는 포켓몬의 ID를 저장하는 Set객체
  const [myPokemonIdList, setMyPokemonIdList] = useState(new Set());

  //PokemonCard에서 추가버튼을 클릭하면 실행
  //myPokemonIdList에 ID를 추가
  const addMyPokemonId = (id) => {
    if (myPokemonIdList.size >= 6) {
      alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
      return 0;
    }
    setMyPokemonIdList(new Set([...myPokemonIdList, id]));
  };

  //PokemonCard에서 삭제버튼을 클릭하면 실행
  //myPokemonIdList에 ID를 추가
  const removeMyPokemonId = (id) => {
    const tempSet = new Set(myPokemonIdList);
    tempSet.delete(id);
    setMyPokemonIdList(tempSet);
  };

  return (
    <>
      <DexStyled>
        <div>
          {/* 선택한 포켓몬리스트 Card를 표시하는 컴포넌트 */}
          <Dashboard
            myPokemonIdList={myPokemonIdList}
            removeMyPokemonId={removeMyPokemonId}
          />
        </div>
        <div>
          {/* 전체 포켓몬리스트 Card를 표시하는 컴포넌트 */}
          <PokemonList addMyPokemonId={addMyPokemonId} />
        </div>
      </DexStyled>
    </>
  );
};

export default Dex;
