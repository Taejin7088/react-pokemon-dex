import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = [];

const myPokemonListSlice = createSlice({
  name: "myPokemonList",
  initialState,
  reducers: {
    //PokemonCard에서 추가버튼을 클릭하면 실행
    addMyPokemonId: (state, { payload }) => {
      if (state.length === 6) {
        toast.warning("포켓몬은 최대 \n여섯개까지만 \n선택 할 수 있어요.");
        return state;
      }
      if (state.includes(payload)) {
        toast.warning("이미 포함되어 있는 \n포켓몬 입니다.");
        return state;
      }
      state.push(payload);
      toast.success("포켓몬 추가 완료");
    },

    //PokemonCard에서 삭제버튼을 클릭하면 실행
    removeMyPokemonId: (state, { payload }) => {
      toast.success("포켓몬 삭제 완료");
      return state.filter((id) => id !== payload);
    },
  },
});

export const { addMyPokemonId, removeMyPokemonId } = myPokemonListSlice.actions;
export default myPokemonListSlice.reducer;
