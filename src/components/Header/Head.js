import React from "react";
import logo from "../../images/logo_small.png"
import droplogo from "../../images/bluelogo.png"

import "./Head.css";

const Head = () => {
  return (
      <div className="headheader">

        <div class="navbar">

          <a href="#asd">صفحه اصلی</a>
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
                <h3>دسته بندی ها</h3>
                <a href="#a">دسته بندی اول</a>
                <a href="#a">دسته بندی دوم</a>
                <a href="#a">دسته بندی سوم</a>
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

          <button class="dropbtn">صفحات دیگر
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <div class="row">
              <div class="column">
                <h3>صفحات بیشتر</h3>
                <a href="#a">صفحه اول</a>
                <a href="#a">صفحه دوم</a>
                <a href="#a">صفحه سوم</a>
                <a href="#a">صفحه چهارم</a>
              </div>
            </div>
          </div>
        </div>

        <div class="dropdown">

          <button class="dropbtn">آزمایشی
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <div class="row">
              <div class="column">
                <h3>صفحات آزمایشی</h3>
                <a href="#a">اولین صفحه</a>
                <a href="#a">دومین صفحه</a>
                <a href="#a">سومین صفحه</a>
              </div>
              <div class="column">
                <h3>در حال اجرا</h3>
                <a href="#asd">نمایش اول</a>
                <a href="#asd">نمایش دوم</a>
              </div>
            </div>
          </div>
        </div>

        <div class="dropdown">

          <button class="dropbtn">مقالات
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <div class="row">
              <div class="column">
                <h3>لیست مقالات</h3>
                <a href="#a">مقاله اول</a>
                <a href="#a">مقاله دوم</a>
                <a href="#a">مقاله سوم</a>
              </div>
            </div>
          </div>
        </div>
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