import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainRoute from "./Pages/MainRoute";
import Footer from "./Components/footer/Footer";

const App = () => {
  return (
    <div  className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_1280.png')] bg-cover bg-center min-h-[100vh]"
    >
      <Sidebar />
      <MainRoute />
      <Footer />
    </div>
  );
};

export default App;
