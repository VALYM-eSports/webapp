import React from "react";
import NavigationBarDesktop from "./NavigationBarDesktop";
import NavigationBarMobile from "./NavigationBarMobile";

const Header = () => {
  return (
    <>
      <div className="bg-[#110B28] sm:block hidden">
        <NavigationBarDesktop />
      </div>
      <div className="bg-[#110B28] w-screen sm:hidden block">
        <NavigationBarMobile />
      </div>
    </>
  );
};

export default Header;
