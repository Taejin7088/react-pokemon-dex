import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  //  name no  img_url types description
  const pokemonName = queryParams.get("name");
  const pokemonImg_url = queryParams.get("img_url");
  const pokemonTypes = queryParams.get("types");
  const pokemonDescription = queryParams.get("description");
  console.log("pokemonName", pokemonName);
  console.log("pokemonImg_url", pokemonImg_url);
  console.log("pokemonTypes", pokemonTypes);
  console.log("pokemonDescription", pokemonDescription);
  return (
    <>
      <div>
        포케몬 정보 디테일 띄우는 페이지임
        <br />
        queryString으로 받아온 값으로 pokemonlist.find 해서 해당 값으로 페이지
        구성
      </div>
    </>
  );
};

export default Detail;
