import React from 'react';
import Top from "../../components/Top/Top";
import Header from "../../components/Header/Head";
import Slider from "../../components/Slider/Slider";
import SecFive from "../../components/SectionFive/SecFive";
import SecNews from "../../components/SecNews/SecNews";
import SecUse from "../../components/SecUse/SecUse";
import Footer from "../../components/Footer/Footer";

function Main() {
  return (
    <div>
      <Top />
      <Header />
      <Slider />
      <SecFive />
      <SecNews />
      <SecUse />
      <Footer />
    </div>
  );
}

export default Main;