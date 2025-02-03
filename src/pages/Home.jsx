import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const HomeStyled = styled.div`
  width: 100vh;
  height: 100vh;
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

const Home = () => {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <>
      <HomeStyled>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREVMZdfAnSkYIc_0hIzuFUVWhGP-tOwjjSxw&s"
          alt="포켓몬 로고이미지"
        />
        <button
          onClick={() => {
            navigate("/dev");
          }}
        >
          포켓몬 도감 시작하기
        </button>
      </HomeStyled>
    </>
  );
};

export default Home;
