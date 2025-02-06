import "./App.css";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Router from "./shared/Router";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import { ToastContainer } from "react-toastify";
const GlobalStyled = createGlobalStyle`
  ${reset}
`;
function App() {
  return (
    <>
      <GlobalStyled />
      <ToastContainer />
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}
export default App;
