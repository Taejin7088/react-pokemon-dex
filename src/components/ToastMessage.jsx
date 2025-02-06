import { toast } from "react-toastify";
import styled from "styled-components";

const AddRemoveStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .img-area {
    display: flex;
    gap: 3px;
    justify-content: center;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;

//닫혀 있는 포켓몬볼이미지를 만들어줌
const makePokeBallImg = (myPokemonListLength) => {
  const pokeBallImgArr = [...Array(myPokemonListLength).keys()];
  return pokeBallImgArr.map((key) => {
    return (
      <img key={key} src="../../public/images/pokemonball.png" alt="포케몬볼" />
    );
  });
};

//닫혀 있는 포켓볼 이미지를 alert창에 띄움
export const toastAddMyPokemonMessage = (myPokemonListLength) => {
  const ToastContent = (
    <>
      <AddRemoveStyled>
        <div>포켓몬 추가 완료!</div>
        <div className="img-area">{makePokeBallImg(myPokemonListLength)}</div>
      </AddRemoveStyled>
    </>
  );
  toast.success(ToastContent);
  return <></>;
};

//열려 있는 포켓볼 이미지를 alert창에 띄움
export const toastRemoveMyPokemonMessage = (myPokemonListLength) => {
  const ToastContent = (
    <>
      <AddRemoveStyled>
        <div>포켓몬 삭제 완료!</div>
        <div className="img-area">
          {makePokeBallImg(myPokemonListLength - 1)}
          <img src="../../public/images/openPokeBall.png" alt="포케몬볼" />
        </div>
      </AddRemoveStyled>
    </>
  );
  toast.success(ToastContent);
};
