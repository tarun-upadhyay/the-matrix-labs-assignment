import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavOption = ({ title, svg, route }) => {
  const location = useLocation();

  useEffect(() => {}, [location.pathname]);

  return (
    <NavLink to={`/${route}`}  style = {({isActive}) => ({background : isActive ? '#F30050' : "", marginBottom : "12px"})}>
      <div className="pt-[19px] pr-[20px] pb-[22px] pl-[32px] flex items-center">
        <img src={svg} alt={title} />
        <p className="text-[#F7F9F9] ml-[20px] font-wsans text-[20px] leading-7">
          {title}
        </p>
      </div>
    </NavLink>
  );

};

export default NavOption;
