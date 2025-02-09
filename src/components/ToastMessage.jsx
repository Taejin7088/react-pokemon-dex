import styled from "styled-components";

const AddRemoveStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
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

//
const makePokeBallImg = (myPokemonListLength) => {
  const pokeBallImgArr = [...Array(myPokemonListLength).keys()];
  return pokeBallImgArr.map((key) => {
    return <img key={key} src="/images/pokemon-ball.png" alt="포케몬볼" />;
  });
};

//토스트alert창에 띄울 메시지를 리턴해주는 컴포넌트
const ToastMessage = ({ type, myPokemonList }) => {
  switch (type) {
    //추가할때 뜨는메시지
    case "ADD":
      return (
        <div style={{ display: "flex" }}>
          <div>
            <img
              style={{ display: "flex", width: "60px", height: "100px" }}
              src="/images/happy-jiwoo.png"
              alt="지우"
            />
          </div>
          <AddRemoveStyled>
            <div>포켓몬 추가 완료!</div>
            <div className="img-area">
              {makePokeBallImg(myPokemonList.length + 1)}
            </div>
          </AddRemoveStyled>
        </div>
      );

    //지울때뜨는메시지
    case "REMOVE":
      return (
        <AddRemoveStyled>
          <div>포켓몬 삭제 완료!</div>
          <div className="img-area">
            {makePokeBallImg(myPokemonList.length - 1)}
            <img src="/images/open-poke-ball.png" alt="포케몬볼" />
          </div>
        </AddRemoveStyled>
      );

    //가득차있을때 뜨는 메시지
    case "FULL":
      return (
        <div style={{ display: "flex" }}>
          <div>
            <img
              style={{ display: "flex", width: "70px", height: "100px" }}
              src="/images/oak.png"
              alt="오박사"
            />
          </div>
          <AddRemoveStyled>
            <div>
              더 이상 선택 <br /> 할 수 없습니다.
            </div>
            <div className="img-area">
              {makePokeBallImg(myPokemonList.length)}
            </div>
          </AddRemoveStyled>
        </div>
      );

    //중복이있을때 뜨는 메시지
    case "INCLUDE":
      return (
        <div style={{ display: "flex" }}>
          <div>
            <img
              style={{ display: "flex", width: "70px", height: "100px" }}
              src="/images/oak.png"
              alt="오박사"
            />
          </div>
          <AddRemoveStyled>
            <div>
              {" "}
              이미 포함되어 있는 <br />
              포켓몬 입니다.
            </div>
            <div className="img-area">
              {makePokeBallImg(myPokemonList.length)}
            </div>
          </AddRemoveStyled>
        </div>
      );

    default:
      return null;
  }
};

export default ToastMessage;
