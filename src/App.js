import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainRoute from "./Pages/MainRoute";
import Footer from "./Components/footer/Footer";

const App = () => {
  return (
    <div  className="bg-[url('./BGImage9398.png')] bg-cover bg-center min-h-[100vh]"
    >
      <Sidebar />
      <MainRoute />
      <Footer />
    </div>
  );
};

export default App;
