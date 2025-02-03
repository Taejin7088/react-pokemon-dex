import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <>
      <div>Home DEX로 이동하기</div>
      <button
        onClick={() => {
          navigate("/dev");
        }}
      >
        dex로이동
      </button>
    </>
  );
};

export default Home;
