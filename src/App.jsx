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
      <ToastContainer
        position="top-center" // 알람 위치 지정
        autoClose={2000} // 자동 off 시간
        hideProgressBar={false} // 진행시간바 숨김
        rtl={false} // 알림 좌우 반전
        theme="light"
        toastStyle={{
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
          fontWeight: "800",
          width: "400px",
          padding: "30px",
          whiteSpace: "pre-line",
        }}
      />
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}
export default App;
