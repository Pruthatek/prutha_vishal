import { React, useState, useEffect } from "react";
import Blogs from "./components/Blog/Blogs";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/About/AboutUs";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";

const App = () => {
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
    <div className="dark:bg-black dark:text-white bg-white text-black">
      <Router>
        <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

{
  /* // Theme Icons
  const sunIcon = document.querySelector(".sun");
  const moonIcon = document.querySelector(".moon");

  // Theme Vars
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Icon Toggle
  const iconToggle = () => {
    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");
  };

  // Theme Check
  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      moonIcon.classList.add("hidden");
      return;
    }
    sunIcon.classList.add("hidden");
  };

  // Manual Theme Switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      iconToggle();
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
  };

  // Call Theme Switch on Button
  sunIcon.addEventListener("click", () => {
    themeSwitch();
  });
  moonIcon.addEventListener("click", () => {
    themeSwitch();
  });

  // invoke Theme Check on initial load
  themeCheck(); */
}
