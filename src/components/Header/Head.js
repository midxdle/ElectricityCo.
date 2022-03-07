import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../images/logosmall.jpeg"
import droplogo from "../../images/logosmall.jpeg"

import "./Head.css";

const Head = () => {
  return (
      <div className="headheader">

        <div class="navbar">
          <Link to="/">
          <a href="#mainpage">صفحه اصلی</a>
          </Link>
          <div class="dropdown">
            <button class="dropbtn">اخبار و رویدادها
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <div class="header">
                <h2>اخبار و رویداد ها</h2>
              </div>
            <div class="row">
              <div class="column">
                <h3>تازه ترین خبرها</h3>
                <a href="#a">خبر اول</a>
                <a href="#a">خبر دوم</a>
                <a href="#a">خبر سوم</a>
              </div>
              <div class="column">
                <h3>توضیحات</h3>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
              </div>
              <div class="column">
                <h3>تصاویر</h3>
                <img className="logoimg"  alt="logo" src={droplogo}></img>
              </div>
            </div>
          </div>
        </div>

        <div class="dropdown">

          <button class="dropbtn">خدمات
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <div class="header">
              <h2>خدمات</h2>
            </div>
            <div class="row">
              <div class="column">
                <h3>خدمات ویژه</h3>
                <a href="#a">خدمت اول</a>
                <a href="#a">خدمت دوم</a>
                <a href="#a">خدمت سوم</a>
              </div>
              <div class="column">
                <h3>توضیحات</h3>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</p>
              </div>
              <div class="column">
                <h3>تصاویر</h3>
                <img className="logoimg"  alt="logo" src={droplogo}></img>
              </div>
            </div>
          </div>
        </div>

        <div class="dropdown">

          <button class="dropbtn">گالری
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <div class="row">
              <div class="column">
                <h3>تصاویر پروژه های اخیر</h3>
                <a href="#a">پروژه اول</a>
                <a href="#a">پروژه دوم</a>
                <a href="#a">پروژه سوم</a>
                <a href="#a">پروژه چهارم</a>
              </div>
            </div>
          </div>
        </div>

        <div class="dropdown">

          <button class="dropbtn">درباره ما
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <div class="row">
              <div class="column">
                <h3>معرفی کیهان کاوش نوین</h3>
                <a href="#a">اولین صفحه</a>
                <a href="#a">دومین صفحه</a>
                <a href="#a">سومین صفحه</a>
              </div>
              <div class="column">
                <h3>پروژه های در حال اجرا</h3>
                <a href="#asd">پروژه اول</a>
                <a href="#asd">پروژه دوم</a>
              </div>
            </div>
          </div>
        </div>

        <div class="dropdown">

          <button class="dropbtn">ارتباط با ما
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <div class="row">
              <div class="column">
                <h3>راه های ارتباطی</h3>
                <a href="#a">راه اول</a>
                <a href="#a">راه دوم</a>
                <a href="#a">راه سوم</a>
              </div>
            </div>
          </div>
        </div>
  </div>

      <div className="parentlogo">
      <div className="logo">
      <div className="logotext">
      <h1>کیهان کاوش نوین</h1>
      <p>شرکت مهندسی ارتباطات و نیرو</p>
      </div>
      <div className="logo1">
      <img className="logoimg"  alt="logo" src={logo}></img>
      </div>
      </div>
      </div>

      </div>
  );
};

export default Head;