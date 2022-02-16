import React from "react";
import footerlogo from "../../images/bluelogo.png"
import "./Footer.css";

const Footer = () => {
  return (
      <div className="footer">
      
      <div className="footerlogo">
      <img className="footerlogoimg" alt="footerlogo" src={footerlogo}></img>
      <div className="text1">
        <h1>پلیمر</h1>
      </div>
      </div>

      <div className="footertext">

        <div className="text2">
        <h2>لینک های اصلی</h2>
        <div className="about">
        <a href="/about">درباره ما</a>
        <a href="/about">  بلاگ </a>
        <a href="/about"> امنیت   </a>
        <a href="/about"> قوانین و مقررات </a>
        <a href="/about"> تماس با ما </a>
        </div>
        </div>
        

        <div className="text3">
        <h2> امکانات و خدمات </h2>
        <div className="tools">
        <a href="/tools">  آزمایشی  </a>
        <a href="/tools"> معرفی به دوستان </a>
        <a href="/tools"> اپلیکیشن  </a>
        <a href="/tools"> مستندات  </a>
        </div>       
        </div>
        

        <div className="text4">
        <h2> راهنما و پشتیبانی </h2>
        <div className="help">
        <a href="/help"> سوالات متداول </a>
        <a href="/help"> کاربری </a>
        <a href="/help"> قیمت ها   </a>
        <a href="/help"> راهنمای حساب کاربری </a>
        </div>
        </div>
        
      </div>

      </div>
  );
};

export default Footer;