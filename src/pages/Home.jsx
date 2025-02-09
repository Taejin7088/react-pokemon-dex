import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/pokemondex-home-background.png");
  width: 100%;

  @media (min-width: 1600px) {
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  /* */
  /*  */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  img {
    width: 30%;
    height: auto;
  }
  button {
    margin: 50px;
    background-color: red;
    height: 50px;
    border: solid 1px transparent;
    border-radius: 10px;
    color: white;
    font-size: calc(0.5vw + 1vh);
    cursor: pointer;
    transition: 0.3s;
  }
  button:hover {
    background-color: #793434;
  }
`;

//Dex페이지로 이동하는 기능만 가진 페이지
const Home = () => {
  return (
    <>
      <HomeStyled>
        <img src="/images/pokemon-logo.png" alt="포켓몬 로고이미지" />
        <Link to={"/dex"}>
          <button>포켓몬 도감 시작하기</button>
        </Link>
      </HomeStyled>
    </>
  );
};

export default Home;
