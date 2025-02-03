import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Router from "./shared/Router";
const GlobalStyled = createGlobalStyle`
  ${reset}
`;
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyled />
      <Router />
    </>
  );
}

export default App;
