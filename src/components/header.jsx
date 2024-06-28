import React from "react";
import imgURL from "../assets/alfa logo.png"

function Header() {
 
  return (

    <header className="header  ">
      <div className=" d-flex container px-4 px-lg-5 my-5">
            <div className="col-4">
                <img className="logo" src={imgURL} alt="Logo" />
            </div>
         <div className="headerText col-8 text-end text-white">

          <h1 className="display-4 fw-bolder">Shop in Style</h1>
          <p className="lead fw-normal text-white-50 mb-0">Women's Garment</p>
         </div>
      </div>
    </header>
  );
}

export default Header;