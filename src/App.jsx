import "./App.css";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Router from "./shared/Router";
const GlobalStyled = createGlobalStyle`
  ${reset}
`;
function App() {
  return (
    <>
      <GlobalStyled />
      <Router />
    </>
  );
}

export default App;
