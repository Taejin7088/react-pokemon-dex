import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokemonCardStyled = styled.div`
  .card {
    background-color: white;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 280px;
    cursor: pointer;
    transform: 0.3s;
  }
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.3);
  }
  img {
    flex-grow: 2;
  }
  .pokemon-name {
    flex-grow: 1;
  }
  .pokemon-num {
    flex-grow: 1;
  }
  button {
    background-color: red;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    max-height: 30px;
    width: 60px;
    margin-bottom: 10px;
    flex-grow: 1;
    transition: 0.3s;
  }
  button:hover {
    background-color: #793434;
  }
`;

// {
//   "img_url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
//   "korean_name": "뮤츠",
//   "types": [
//       "에스퍼"
//   ],
//   "id": 150,
//   "description": "에스퍼 타입의 전설의 포켓몬으로, 강력한 초능력을 가집니다."
// }

const PokemonCard = ({ pokemon, cardAction, isAdd }) => {
  const navigate = useNavigate();
  const paddedId = (pokemon.id + "").padStart(3, "0");
  const detailPageQueryString = `/detail?name=${pokemon.korean_name}&no=${paddedId}&img_url=${pokemon.img_url}&types=${pokemon.types}&description=${pokemon.description}`;
  return (
    <>
      <PokemonCardStyled>
        <div
          className="card"
          onClick={(e) => {
            if (e.target.className === "card-action-btn") {
              return;
            }
            alert("디테일페이지");
            navigate(detailPageQueryString);
          }}
        >
          <img src={pokemon.img_url} alt="포켓몬이미지" />
          <div className="pokemon-name">{pokemon.korean_name}</div>
          <div className="pokemon-num">No. {paddedId}</div>
          <button
            className="card-action-btn"
            onClick={() => {
              cardAction(pokemon.id);
            }}
          >
            {isAdd ? "추가" : "삭제"}
          </button>
        </div>
      </PokemonCardStyled>
    </>
  );
};

export default PokemonCard;
