import { useDispatch, useSelector } from "react-redux";
import {
  addMyPokemonId,
  removeMyPokemonId,
} from "../redux/slices/myPokemonListSlice";
import styled from "styled-components";
import { toast } from "react-toastify";
import ToastMessage from "./ToastMessage";

//추가/삭제 버튼을 리턴하는 컴포넌트
//버튼색상을 제외한 크기 및 디자인은 호출하는 컴포넌트에서 지정 className="card-action-btn"
const PokemonCardActionBtn = ({ pokemonId, isRemove }) => {
  const disPatch = useDispatch();
  const myPokemonList = useSelector((state) => state.myPokemonList);

  //버튼기본값 myPokemonList가
  const buttonAction = {
    text: "추가",
    buttonColor: "red",
    action: () => {
      if (myPokemonList.length === 6) {
        //가득차있다는 메시지를 띄우는 alert창
        toast.warning(
          <ToastMessage type={"FULL"} myPokemonList={myPokemonList} />
        );
        return;
      }
      if (myPokemonList.includes(pokemonId)) {
        //중복선택메시지를 띄우는 alert창
        toast.warning(
          <ToastMessage type={"INCLUDE"} myPokemonList={myPokemonList} />
        );
        return;
      }
      //추가성공메시지를 띄우는 alert창
      toast.success(
        <ToastMessage type={"ADD"} myPokemonList={myPokemonList} />
      );
      disPatch(addMyPokemonId(pokemonId));
    },
  };

  //가득차있으거나 포함되어 있으면 '추가'버튼 > 'X'로 표시만 전환
  if (myPokemonList.length === 6 || myPokemonList.includes(pokemonId)) {
    buttonAction.text = "X";
    buttonAction.buttonColor = "gray";
  }

  //isRemove가 true일때만 삭제버튼으로 변경
  //dash보드에서 사용되는 버튼은 무조건 삭제버튼
  //detail페이지에서 마이포켓몬리스트에 있으면 삭제버튼
  if (isRemove) {
    buttonAction.text = "삭제";
    buttonAction.buttonColor = "#a07474";
    buttonAction.action = () => {
      toast.success(
        <ToastMessage type={"REMOVE"} myPokemonList={myPokemonList} />
      );
      disPatch(removeMyPokemonId(pokemonId));
    };
  }

  return (
    <ButtonColorStyled $buttonColor={buttonAction.buttonColor}>
      <button className="card-action-btn" onClick={buttonAction.action}>
        {buttonAction.text}
      </button>
    </ButtonColorStyled>
  );
};

const ButtonColorStyled = styled.div`
  .card-action-btn {
    background-color: ${({ $buttonColor }) => $buttonColor};
    transition: 0.2s;
  }
  button:hover {
    background-color: #793434;
  }
`;

export default PokemonCardActionBtn;
