import React from "react";
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

const PokemonCard = ({ pokemon }) => {
  const paddedId = (pokemon.id + "").padStart(3, "0");
  return (
    <>
      <PokemonCardStyled>
        <div className="card">
          <img src={pokemon.img_url} alt="포켓몬이미지" />
          <div className="pokemon-name">{pokemon.korean_name}</div>
          <div className="pokemon-num">No. {paddedId}</div>
          <button>추가</button>
        </div>
      </PokemonCardStyled>
    </>
  );
};

export default PokemonCard;
