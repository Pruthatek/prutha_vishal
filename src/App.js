import CaseStudy from "./components/CaseStudy/CaseStudy";
import HappyClient from "./components/HappyClient/HappyClient";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <HappyClient />
      <CaseStudy />
    </div>
  );
}

export default App;
