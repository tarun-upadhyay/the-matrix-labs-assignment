import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainRoute from "./Pages/MainRoute";
import Footer from "./Components/footer/Footer";

const App = () => {
  return <div className="bg-red-500">
    <Sidebar/>
    <MainRoute/>
    <Footer/>
  </div>;
};

export default App;
