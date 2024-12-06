import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import VNavBar from "./NavBar/VNavBar";
import About from "./About/About";
import Service from "./Service/Service";
import Login from "./Login/Login";
import Feature from "./Feature/Feature";
import ContactUs from "./ContactUs/ContactUs";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Try from "./Try/Try";
import NewUser from "./Login/NewUser";
import OptionService from "./Learning/OptionService";
import FuturesLongVsShort from "./Feature/FutureLongVsShort";
import PriceVsIO from "./Feature/PriceVsIO";
import Straddle from "./Strategy/Straddle ";
import MultiStrikeStraddle from "./Strategy/MultiStrikeStraddle";
import StraddleSnapshot from "./Strategy/StraddleSnapshot";
import IOAnalysis from "./Options/IOAnalysis";
function App() {
  return (

    <>
    <div
      class="min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url('https://media.licdn.com/dms/image/v2/C4D12AQHu-VbDaMTZLQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1645694452350?e=2147483647&v=beta&t=3aqNFcu8-GclmJ0G6nNh6QFzc_kWuyFPjGTo5ImL6qY')` }}  
    >


    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navBar" element={<NavBar />} />
          <Route path="/VnavBar" element={<VNavBar />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/" element={<Footer />} />
          <Route path="/try" element={<Try />} />
          <Route path="/newUser" element={<NewUser/>} />
          <Route path="/optionService" element={<OptionService/>}/>
          <Route path="/futureLongVsShort" element={<FuturesLongVsShort/>}/>
          <Route path="/priceVsIO" element={<PriceVsIO/>}/>
          <Route path="/straddle" element={<Straddle/>}/>
          <Route path="/multiStrikeStraddle" element={<MultiStrikeStraddle/>}/>
          <Route path="/straddleSnapshot" element={<StraddleSnapshot/>}/>
          <Route path="/IOAnalysis" element={<IOAnalysis/>}/>
        </Routes>

      </BrowserRouter>
      </div>
      </>
  );
}

export default App;
