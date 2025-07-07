import { useState } from "react";
import { familyMembers } from "../data/familyData.js"; // Importing family members data from the data file
// Importing family members data from the data file
import ProfileCard from "../components/ProfileStructure";

import Navbar from "../components/NavBar";

function Profiles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter, setGenderFilter] = useState("all");

  const handleGenderChange = (gender) => {
    setGenderFilter(gender);
  };

  const filteredMembers = familyMembers.filter((member) => {
    const matchesName = member.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesGender =
      genderFilter === "all" || member.gender === genderFilter;
    return matchesName && matchesGender;
  });

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <h2 className="text-center mb-4">Meet the Akinlemibola Family</h2>

        {/* Search Input */}
        <div className="mb-3 text-center">
          <input
            type="text"
            placeholder="Search by name..."
            className="form-control w-50 mx-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Gender Filter Buttons */}
        <div className="mb-4 text-center">
          <button
            className={`btn me-2 ${
              genderFilter === "all" ? "btn-dark" : "btn-outline-dark"
            }`}
            onClick={() => handleGenderChange("all")}
          >
            All
          </button>
          <button
            className={`btn me-2 ${
              genderFilter === "male" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => handleGenderChange("male")}
          >
            Male
          </button>
          <button
            className={`btn ${
              genderFilter === "female" ? "btn-danger" : "btn-outline-danger"
            }`}
            onClick={() => handleGenderChange("female")}
          >
            Female
          </button>
        </div>

        {/* Member Cards */}

        <div className="row">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member) => (
              <div className="col-md-4 mb-4" key={member.id}>
                <ProfileCard
                  name={member.name}
                  image={member.image}
                  gender={member.gender}
                  role={member.role}
                  generation={member.generation}
                ></ProfileCard>
              </div>
            ))
          ) : (
            <div className="text-center">
              <p>No family members found.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Profiles;
// This code defines a Profiles component that displays family members with search and filter functionality.
// It allows users to search by name and filter
