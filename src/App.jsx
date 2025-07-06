import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./bootstrap.bundle.js";
import "./bootstrap.css";
import TreeChart from "./pages/FamilyTree.jsx";
import "./styling/FamilyTree.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tree" element={<TreeChart />} />
          {/* Add more routes as needed */}
          {/* <Route path="/lineage" element={<Lineage />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* Add a default route for 404 Not Found */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
