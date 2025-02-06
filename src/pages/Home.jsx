import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("../../public/images/pokemondexHome.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  img {
    width: 50%;
    height: auto;
  }
  button {
    margin: 50px;
    background-color: red;
    width: 20%;
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
  const navigate = useNavigate();
  return (
    <>
      <HomeStyled>
        <img
          src="../../public/images/pokemonLogo.png"
          alt="포켓몬 로고이미지"
        />
        <button
          onClick={() => {
            navigate("/dex");
          }}
        >
          포켓몬 도감 시작하기
        </button>
      </HomeStyled>
    </>
  );
};

export default Home;
