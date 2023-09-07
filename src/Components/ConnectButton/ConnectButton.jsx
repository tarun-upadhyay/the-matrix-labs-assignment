import React from "react";
const ConnectButton = () => {

  return (
    <button className="font-poppins font-semibold connectBtnSm absolute md:right-[44px] md:top-[24px] md:text-[16px] md:w-[156px] md:h-[52px] md:rounded-[20px] md:font-semibold" onClick={() => open()}>
      Connect
    </button>
  );
};

export default ConnectButton;
