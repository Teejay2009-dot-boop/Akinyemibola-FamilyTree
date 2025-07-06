import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./bootstrap.bundle.js";
import "./bootstrap.css";
import TreeChart from "./pages/FamilyTree.jsx";
import "./styling/FamilyTree.css";
import Lineage from "./pages/Lineage.jsx";
import Profiles from "./pages/Profiles.jsx";
import Person from "./pages/Person.jsx";
import MemberProfile from "./pages/Person.jsx";

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
          <Route path="/profiles/person" element={<Person></Person>}></Route>
          {/* Add a default route for 404 Not Found */}

          <Route path="/member/:id" element={<MemberProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
