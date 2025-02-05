import "./App.css";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Router from "./shared/Router";
import { MyPokemonListIdContextProvider } from "./context/MyPokemonListIdContext";
const GlobalStyled = createGlobalStyle`
  ${reset}
`;
function App() {
  return (
    <>
      <GlobalStyled />
      <MyPokemonListIdContextProvider>
        <Router />
      </MyPokemonListIdContextProvider>
    </>
  );
}
export default App;
