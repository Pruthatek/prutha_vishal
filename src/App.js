import Blogs from "./components/Blog/Blogs";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
