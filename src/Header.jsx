import React from "react";
import logo from "./Images/logo.png";


const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" width='80' height='70'/>
        <h1> Notes keep</h1>
      </div>
    </>
  );
};


export default Header;