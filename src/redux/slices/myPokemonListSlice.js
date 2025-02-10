import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const myPokemonListSlice = createSlice({
  name: "myPokemonList",
  initialState,
  reducers: {
    //PokemonCard에서 추가버튼을 클릭하면 실행
    addMyPokemonId: (state, { payload }) => {
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
