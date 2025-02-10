import { Link } from "react-router-dom";
import styled from "styled-components";
import PokemonCardActionBtn from "./PokemonCardActionBtn";

//포켓몬 카드 표시를 위한 부분
const PokemonCard = ({ pokemon, isRemove }) => {
  //숫자 "001"의 형식을 저장하는 변수
  const paddedId = (pokemon.id + "").padStart(3, "0");

  //카드 클릭시 detail페이지에 querySting을 넘겨주기 위한변수
  //id값만 넘겨주면 또 id랑 전체리스트 비교해서 찾아야되기때문에 전부 다 넘겨주기
  //name(포켓몬이름), id(포켓몬id값), img_url(포켓몬이미지url), types(포켓몬타입), description(상세정보) 전달
  const detailPageQueryString = `/detail?name=${pokemon.korean_name}&id=${pokemon.id}&img_url=${pokemon.img_url}&types=${pokemon.types}&description=${pokemon.description}`;

  return (
    <>
      <PokemonCardStyled>
        <Link
          to={detailPageQueryString}
          onClick={(e) => {
            if (e.target.classList.contains("card-action-btn")) {
              e.preventDefault();
            }
          }}
        >
          <div className="card">
            <img
              className="pokemon-img"
              src={pokemon.img_url}
              alt={pokemon.korean_name + "이미지"}
            />
            <div className="pokemon-name">{pokemon.korean_name}</div>
            <div className="pokemon-num">No. {paddedId}</div>
            {/* 추가/삭제 버튼을 리턴하는 컴포넌트 */}
            <PokemonCardActionBtn pokemonId={pokemon.id} isRemove={isRemove} />
          </div>
        </Link>
      </PokemonCardStyled>
    </>
  );
};

const PokemonCardStyled = styled.div`
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.3);
  }
  .pokemon-img {
    flex-grow: 2;
  }
  .pokemon-name {
    flex-grow: 1;
  }
  .pokemon-num {
    flex-grow: 1;
  }
  button {
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
    height: 30px;
    width: 60px;
    margin-bottom: 10px;
    flex-grow: 1;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a:visited,
  a:hover,
  a:active {
    color: inherit; /* 클릭 전후에도 색상 유지 */
  }
`;

export default PokemonCard;
