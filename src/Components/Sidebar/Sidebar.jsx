import React, { useEffect, useState } from "react";
import { menuOptions } from "./Options/menuOptions";
import NavOption from "./NavOption";
import SocilMedia from "./SocilMedia";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    // Function to update `showSidebar` based on window width
    function handleWindowResize() {
      setShowSidebar(window.innerWidth >= 768);
    }

    window.addEventListener("resize", handleWindowResize);

    handleWindowResize();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  //searchBar
  const handleClick = () => {
    document.getElementById("searchBar").classList.add("z-[-100]");
    return setShowSidebar(true);
  };
  const handleClose = ()=>{

    document.getElementById("searchBar").classList.remove("z-[-100]");
    return setShowSidebar(false)
  }
  return (
    <>
      {showSidebar ? (
        <div
          className={`h-[100vh] flex flex-col fixed top-0 left-0 w-[288px] bg-sbarbk borderRadius z-10`}
        >
          <div className="flex flex-col justify-between h-[100%]">
            <nav className="flex flex-col">
              <div className="flex items-center">
                <div className="pt-[16px] pr-[0] pb-[17px] pl-[35px] mt-[16px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="30"
                    viewBox="0 0 26 30"
                    fill="none"
                  >
                    <path
                      d="M8.66667 14.6667C9.37391 14.6667 10.0522 14.3857 10.5523 13.8856C11.0524 13.3855 11.3333 12.7072 11.3333 12C11.3333 11.2928 11.0524 10.6145 10.5523 10.1144C10.0522 9.61429 9.37391 9.33333 8.66667 9.33333C7.95942 9.33333 7.28115 9.61429 6.78105 10.1144C6.28095 10.6145 6 11.2928 6 12C6 12.7072 6.28095 13.3855 6.78105 13.8856C7.28115 14.3857 7.95942 14.6667 8.66667 14.6667ZM12.6667 0L25.3333 7.33333V22L12.6667 29.3333L0 22V7.33333L12.6667 0ZM2.66667 8.87067V20.4627L5.82933 22.2933L16.5933 14.4L22.6667 18.0453V8.872L12.6667 3.08L2.66667 8.87067Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <p className="text-[#FFFFFFB2] font-pacifico text-[32px] ml-[25px]">
                  NFTify
                </p>
                <AiOutlineCloseCircle
                  className="text-[#ffff] text-4xl absolute right-9 top-5 overflow-hidden md:hidden"
                  onClick={() => handleClose()}
                />
              </div>

              {menuOptions.map((el) => (
                <NavOption
                  title={el.title}
                  route={el.route}
                  svg={el.svg}
                  exact={el.exact}
                  key={el.id}
                />
              ))}
            </nav>
          </div>

          <SocilMedia />
        </div>
      ) : (
        <div
          className={`absolute top-[39.57px] left-[35.5px] z-[100000000000000] flex items-center justify-center md:hidden `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            onClick={() => handleClick()}
          >
            <path
              d="M18.3574 1.57143H1.64307M18.3574 8H1.64307M18.3574 14.4286H1.64307"
              stroke="white"
              stroke-width="1.71429"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-[16px] font-pacifico text-[#fff] font-normal ml-[11.64px]">
            NFTify
          </p>
        </div>
      )}
    </>
  );
};

export default Sidebar;
