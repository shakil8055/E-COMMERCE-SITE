import React from "react";


function Header() {
 
  return (
    <header className="header  py-5">
       
      <div className="container px-4 px-lg-5 my-5">
      <div className="logo"></div>
        <div className="text-end text-white">
          <h1 className="display-4 fw-bolder">Shop in Style</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            Women's Garment
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;