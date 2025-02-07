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
      <Provider store={store}>
        <ToastContainer
          position="bottom-right" // 알람 위치 지정
          autoClose={1300} // 자동 off 시간
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
        <Router />
      </Provider>
    </>
  );
}
export default App;
