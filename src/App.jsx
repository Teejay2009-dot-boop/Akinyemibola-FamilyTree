import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./bootstrap.bundle.js";
import "./bootstrap.css";
import TreeChart from "./pages/FamilyTree.jsx";
import "./styling/FamilyTree.css";
import LineagePage from "./pages/Lineage.jsx";
import Profiles from "./pages/Profiles.jsx";
import PersonDetails from "./pages/ProfileDetails.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

import "aos/dist/aos.css";

import Aos from "aos";

function App() {
  Aos.init();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tree" element={<TreeChart />} />
          {/* Add more routes as needed */}
          <Route path="/lineagePage" element={<LineagePage></LineagePage>} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/profiles/:id" element={<PersonDetails />} />

          {/* Add a route for profile details */}
          <Route path="*" element={<NotFoundPage />} />

          {/* Add a default route for 404 Not Found */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
