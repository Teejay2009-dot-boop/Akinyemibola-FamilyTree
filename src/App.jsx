import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./bootstrap.bundle.js";
import "./bootstrap.css";
import TreeChart from "./pages/FamilyTree.jsx";
import "./styling/FamilyTree.css";
import Lineage from "./pages/Lineage.jsx";
import Profiles from "./pages/Profiles.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tree" element={<TreeChart />} />
          {/* Add more routes as needed */}
          <Route path="/lineage" element={<Lineage />} />
          <Route path="/profiles" element={<Profiles />} />

          {/* Add a route for profile details */}
          <Route path="*" element={<div>404 Not Found</div>} />

          {/* Add a default route for 404 Not Found */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
