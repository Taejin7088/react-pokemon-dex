import { createContext, useState } from "react";

//선택한 id의 포켓몬 리스트 배열을 전달시켜줄 context
const MyPokemonListIdContext = createContext(null);

const MyPokemonListIdContextProvider = ({ children }) => {
  //선택하는 포켓몬의 ID를 저장하는 Set객체
  //Set으로 똑같은거 추가되도 저장안됨
  const [myPokemonIdList, setMyPokemonIdList] = useState(new Set());

  //PokemonCard에서 추가버튼을 클릭하면 실행
  //myPokemonIdList에 ID를 추가
  const addMyPokemonId = (id) => {
    if (myPokemonIdList.size >= 6) {
      alert("포켓몬은 최대 여섯개까지만 선택 할 수 있어요.");
      return 0;
    }
    setMyPokemonIdList(new Set([...myPokemonIdList, id]));
  };

  //PokemonCard에서 삭제버튼을 클릭하면 실행
  //myPokemonIdList에 ID를 추가
  const removeMyPokemonId = (id) => {
    const tempSet = new Set(myPokemonIdList);
    tempSet.delete(id);
    setMyPokemonIdList(tempSet);
  };

  //사용할 Provider 정의해서 리턴
  return (
    <MyPokemonListIdContext.Provider
      value={{
        myPokemonIdList,
        addMyPokemonId,
        removeMyPokemonId,
      }}
    >
      {children}
    </MyPokemonListIdContext.Provider>
  );
};

export { MyPokemonListIdContextProvider, MyPokemonListIdContext };
