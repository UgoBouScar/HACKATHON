import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";
import NavBar from "@pages/NavBar";
import Footer from "@pages/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
