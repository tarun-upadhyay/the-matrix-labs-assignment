import React from "react";
import { menuOptions } from "./Options/menuOptions";
import NavOption from "./NavOption";
import SocilMedia from "./SocilMedia";

const Sidebar = () => {
  console.log(menuOptions);
  return (
    <div className="h-[100vh] flex flex-col fixed top-0 left-0 w-[288px] bg-sbarbk borderRadius sm:invisible md:visible sm:z-10 md:z-0">
      <nav className="h-[78vh]">
        <div className="flex flex-row mt-[29px] justify-center items-center gap-5 ">
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
          <p className="text-[#FFFFFFB2] font-pacifico text-[2rem] pl-3">
            NFTify
          </p>
        </div>
        <div className="mt-5">
          <ul id="homeRoute">
            {menuOptions.map((el) => (
              <NavOption
                title={el.title}
                route={el.route}
                svg={el.svg}
                exact={el.exact}
                key={el.id}
              />
            ))}
          </ul>
        </div>
      </nav>
      <div>
        <SocilMedia />
      </div>
    </div>
  );
};

export default Sidebar;
