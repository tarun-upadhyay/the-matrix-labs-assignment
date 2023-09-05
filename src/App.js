import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainRoute from "./Pages/MainRoute";

const App = () => {
  return <div className="bg-red-500">
    <Sidebar/>
    <MainRoute/>
  </div>;
};

export default App;
