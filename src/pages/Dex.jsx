import React, { useState } from "react";
import PokemonList from "../components/PokemonList";
import Dashboard from "../components/Dashboard";
import styled from "styled-components";
import { MyPokemonListIdContextProvider } from "../context/MyPokemonListIdContext";

const DexStyled = styled.div`
  background-color: #fadac1;
  padding-top: 10px;
`;

const Dex = () => {
  return (
    <>
      <DexStyled>
        {/* MyPokemonListIdContextProvider 파일에 사용할 state,state조작함수들정의 */}
        <MyPokemonListIdContextProvider>
          <div>
            {/* 선택한 포켓몬리스트 Card를 표시하는 컴포넌트 */}
            <Dashboard />
          </div>
          <div>
            {/* 전체 포켓몬리스트 Card를 표시하는 컴포넌트 */}
            <PokemonList />
          </div>
        </MyPokemonListIdContextProvider>
      </DexStyled>
    </>
  );
};

export default Dex;
