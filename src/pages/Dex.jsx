import React, { useState } from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";

const DexStyled = styled.div`
  background-color: #fadac1;
  padding-top: 10px;
`;

const Dex = () => {
  const [myPokemonIdList, setMyPokemonIdList] = useState(new Set());
  const addMyPokemonId = (id) => {
    if (myPokemonIdList.size >= 6) {
      alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
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
