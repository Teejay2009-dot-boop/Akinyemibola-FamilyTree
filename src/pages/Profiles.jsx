import { useState } from "react";
import { familyMembers } from "../data/familyData.js"; // Importing family members data from the data file
// Importing family members data from the data file
import ProfileCard from "../components/ProfileStructure";

import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

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
        <h2
          className="text-center mb-4"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Meet the Akinlemibola Family
        </h2>

        {/* Search Input */}
        <div
          className="mb-3 text-center"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <input
            type="text"
            placeholder="Search by name..."
            className="form-control w-50 mx-auto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Gender Filter Buttons */}
        <div
          className="mb-4 text-center"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
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
              <div
                className="col-md-4 mb-4 "
                key={member.id}
                data-aos={member.id % 2 === 0 ? "zoom-in-up" : "fade-left"}
                data-aos-delay={member.id * 100}
                data-aos-duration="800"
              >
                <ProfileCard
                  name={member.name}
                  image={member.image}
                  gender={member.gender}
                  role={member.role}
                  generation={member.generation}
                  id={member.id} // Pass the id for routing
                ></ProfileCard>
              </div>
            ))
          ) : (
            <div
              className="text-center mt-5"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrthX2Ntj5-RaUUQEYklUitLWpmWhhdMCk7A&s" // Placeholder image
                alt="Not found"
                className="img-fluid mb-3"
                style={{ maxWidth: "300px" }}
              />
              <h4 className="text-muted">No family member found</h4>
              <p className="text-secondary">
                Try searching with a different name or check the spelling.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profiles;
// This code defines a Profiles component that displays family members with search and filter functionality.
// It allows users to search by name and filter
