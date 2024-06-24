import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Blogs from "./components/Blog/Blogs";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Cookies from "./components/Cookies/Cookies";
import AboutUs from "./components/About/AboutUs";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import WebDevelopment from "./components/WebDevelopment/WebDevelopment";
import DetailedBlog from "./components/DetailedBlog/DetailedBlog";
import UiuxDesigne from "./components/UX/UiuxDesigne";
import Methodology from "./components/Methodology/Methodology";
import Engagement from "./components/Engagement/Engagement";
import EntSoftwareDev from "./components/EntSoftwareDev/EntSoftwareDev";
import Wp from "./components/whatsapp/wp";
import Business from "./components/Business/Business";
import UnderDevelopment from "./components/Under Development/UnderDevelopment";
import Qualitymanag from "./components/Qualitymanag/Qualitymanag";
import Mearnstack from "./components/Mearn/Mearnstack";
import Fullstack from "./components/Fullstack/Fullstack";
import Figmastack from "./components/Figmastack/Figmastack";
import Nodestack from "./components/Nodejs/Nodestack";
import Mongostack from "./components/MongoDB/Mongostack";
import Djangostack from "./components/Django/Djangostack";
import RestApistack from "./components/RestApi/RestApistack";
import Tailwindstack from "./components/Tailwind/Tailwindstack";
import Expressstack from "./components/Express/Expressstack";
import Academy from "./components/Academy/Academy";
import DigitalMarketing from "./components/DigitalMarketing/DigitalMarketing";
import CustomSoftware from "./components/CustomSoftware/CustomSoftware";
import CrossPlatform from "./components/CrossPlatform/CrossPlatform";
import ChatBot from "./components/ChatBot/ChatBot";
import Button from "./components/ChatBot/Button";
import MobileDevelopment from "./components/MobileDevelopment/MobileDevelopment";
import SoftwareTesting from "./components/SoftwareTesting/SoftwareTesting";
import Chatbot from "./components/ChatBot/ChatBot";
import Ad from "./components/Ad/Ad";

const App = () => {
  // AOS for animation
  AOS.init();

  // Dark Mode
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="dark:bg-[#101010] dark:text-white bg-white text-black transition-all duration-300 ease-in-out ">
      <Router>
        <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
        <MobileNavbar theme={theme} />
        {/* <Wp /> */}
        <Routes>
          <Route index element={<Home theme={theme} />} />
          <Route path="/blogs" element={<Blogs theme={theme} />} />
          <Route
            path="/blog/:blogId"
            element={<DetailedBlog theme={theme} />}
          />
          <Route path="/aboutus" element={<AboutUs theme={theme} />} />
          <Route path="/team" element={<Team theme={theme} />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
          <Route
            path="/web-development"
            element={<WebDevelopment theme={theme} />}
          />
          <Route
            path="/qualitymanagement"
            element={<Qualitymanag theme={theme} />}
          />
          <Route
            path="/enterprise"
            element={<EntSoftwareDev theme={theme} />}
          />
          <Route
            path="/underdevelopment"
            element={<UnderDevelopment theme={theme} />}
          />
          <Route path="/chatbot" element={<ChatBot theme={theme} />} />
          <Route path="/methodology" element={<Methodology theme={theme} />} />
          <Route path="/engagement" element={<Engagement theme={theme} />} />
          <Route path="/business" element={<Business theme={theme} />} />
          <Route path="/ui-ux" element={<UiuxDesigne theme={theme} />} />
          <Route path="/engagement" element={<Engagement theme={theme} />} />
          <Route path="/mearnstack" element={<Mearnstack theme={theme} />} />
          <Route path="/fullstack" element={<Fullstack theme={theme} />} />
          <Route path="/figmastack" element={<Figmastack theme={theme} />} />
          <Route path="/nodestack" element={<Nodestack theme={theme} />} />
          <Route path="/mongostack" element={<Mongostack theme={theme} />} />
          <Route path="/djangostack" element={<Djangostack theme={theme} />} />
          <Route
            path="/restapistack"
            element={<RestApistack theme={theme} />}
          />
          <Route
            path="/tailwindstack"
            element={<Tailwindstack theme={theme} />}
          />
          <Route
            path="/expressstack"
            element={<Expressstack theme={theme} />}
          />
          <Route path="/academy" element={<Academy theme={theme} />} />
          <Route
            path="/digitalmarketing"
            element={<DigitalMarketing theme={theme} />}
          />
          <Route
            path="/customsoftware"
            element={<CustomSoftware theme={theme} />}
          />
          <Route
            path="/crossplatform"
            element={<CrossPlatform theme={theme} />}
          />
          <Route
            path="/mobiledevelopment"
            element={<MobileDevelopment theme={theme} />}
          />
          <Route
            path="/softwaretesting"
            element={<SoftwareTesting theme={theme} />}
          />
          <Route path="/ad" element={<Ad theme={theme} />} />
        </Routes>
        {/* {localStorage.getItem("PruthatekCookie") === true ? <Cookies /> : <></>} */}
        {/* <Button/> */}
        <Chatbot />
        <Cookies />
        <Footer theme={theme} />
      </Router>
    </div>
  );
};

export default App;
