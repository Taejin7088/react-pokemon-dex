import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  toastAddMyPokemonMessage,
  toastRemoveMyPokemonMessage,
} from "../../components/ToastMessage";

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
      //추가성공메시지를 띄우는 alert창
      toastAddMyPokemonMessage(state.length);
    },

    //PokemonCard에서 삭제버튼을 클릭하면 실행
    removeMyPokemonId: (state, { payload }) => {
      //삭제성공메시지를 띄우는 alert창
      toastRemoveMyPokemonMessage(state.length);
      return state.filter((id) => id !== payload);
    },
  },
});

export const { addMyPokemonId, removeMyPokemonId } = myPokemonListSlice.actions;
export default myPokemonListSlice.reducer;
