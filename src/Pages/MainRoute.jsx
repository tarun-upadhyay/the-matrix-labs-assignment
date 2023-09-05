import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import PairAddress from "./PairAddress";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/pairaddress" element={<PairAddress />}></Route>
    </Routes>
  );
};

export default MainRoute;
