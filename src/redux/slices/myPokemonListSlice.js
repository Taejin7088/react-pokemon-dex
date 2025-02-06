import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const myPokemonListSlice = createSlice({
  name: "myPokemonList",
  initialState,
  reducers: {
    //PokemonCard에서 추가버튼을 클릭하면 실행
    addMyPokemonId: (state, { payload }) => {
      if (state.includes(payload)) {
        alert("이미 포함되어 있는 포켓몬 입니다.");
        return state;
      }
      if (state.length === 6) {
        alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
        return state;
      }
      state.push(payload);
    },

    //PokemonCard에서 삭제버튼을 클릭하면 실행
    removeMyPokemonId: (state, { payload }) => {
      return state.filter((id) => id !== payload);
    },
  },
});

export const { addMyPokemonId, removeMyPokemonId } = myPokemonListSlice.actions;
export default myPokemonListSlice.reducer;
