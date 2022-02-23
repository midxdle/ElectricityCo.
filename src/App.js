import Top from "./components/Top/Top";
import Header from "./components/Header/Head";
import Slider from "./components/Slider/Slider";
import SecFive from "./components/SectionFive/SecFive";
import SecNews from "./components/SecNews/SecNews";
import SecUse from "./components/SecUse/SecUse";
import SectionSupport from "../src/components/SectionSupport/SectionSupport"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Top />
      <Header />
      <Slider />
      <SecFive />
      <SecNews />
      <SecUse />
      <SectionSupport />
      <Footer />
    </div>
  );
}

export default App;