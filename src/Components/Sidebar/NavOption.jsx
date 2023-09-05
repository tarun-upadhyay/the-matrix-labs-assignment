import React, { useEffect } from "react";
import {  NavLink, useLocation } from "react-router-dom";

const NavOption = ({ title, svg, exact, route }) => {
  const shouldSetBgColor = window.location.href.includes("pairaddress");
  const location = useLocation();
  

  useEffect(() => {}, [location.pathname]);

  return exact ? (
    <li
      className={`flex flex-row gap-5  ${
        !shouldSetBgColor ? "bg-mred" : "bg-transparent"
      }`}
    >
      <img src={svg} alt={title} />
      <NavLink to="/">{title}</NavLink>
    </li>
  ) : (
    <li
      className={`flex flex-row gap-5 ${
        shouldSetBgColor ? "bg-mred" : "bg-transparent"
      }`}
    >
      <img src={svg} alt={title} />
      <NavLink
        to={`/${route}`}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        {title}
      </NavLink>
    </li>
  );
};

export default NavOption;
