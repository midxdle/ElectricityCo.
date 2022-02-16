import React from "react";
import logo from "../../images/logo_small.png"

import "./Head.css";

const Head = () => {
  return (
      <div className="header">
      
      <div className="button">
        <button>صفحه اصلی</button>
        <button>فناوری</button>
        <button>اخبار و رویدادها</button>
        <button>درباره شرکت</button>
      </div>

      <div className="parentlogo">
      <div className="logo">
      <h1>پلیمر لوگو</h1>
      <div className="logo1">
      <img className="logoimg"  alt="logo" src={logo}></img>
      </div>
      </div>
      </div>

      </div>
  );
};

export default Head;