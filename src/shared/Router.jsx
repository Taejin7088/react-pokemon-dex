import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../pages/Detail";
const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="dex/index.html" element={<Dex />} />
      <Route path="detail" element={<Detail />} />
    </Routes>
  );
};

export default Router;
