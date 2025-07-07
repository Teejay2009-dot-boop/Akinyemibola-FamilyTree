// src/pages/PersonDetails.jsx
import { useParams } from "react-router-dom";
import { familyMembers } from "../data/familyData"; // where your dummy data is
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";

export default function PersonDetails() {
  const { id } = useParams();
  const person = familyMembers.find((p) => p.id === parseInt(id));

  if (!person) {
    return (
      <>
        <Navbar />
        <div className="text-center py-5">Person not found</div>;
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="pt-5">
        <h1 className="text-center">Meet {person.name}</h1>

        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={person.image}
                alt=""
                className="img-fluid "
                style={{ width: "100%", height: "70vh", objectFit: "cover" }}
              />
            </div>
            <div className="col-lg-6">
              <div className="container details-text">
                <h2>{person.name}</h2>
                <p className="fs-5">
                  <strong>Gender:</strong> {person.gender}
                </p>
                <p className="fs-5">
                  <strong>Date of Birth:</strong> {person.dob}
                </p>
                <p className="fs-5">
                  <strong>Short Bio:</strong> {person.bio}
                </p>
                <p className="fs-5">
                  <strong>Children:</strong>{" "}
                  {person.children?.join(", ") || "None"}
                </p>
                <p className="fs-5">
                  <strong>Siblings:</strong>{" "}
                  {person.siblings?.join(", ") || "None"}
                </p>
              </div>
              ;
              <div className="mt-5">
                <button className="profileBtn2">
                  <Link
                    to="/profiles"
                    className="profileBtn2"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Back to Profiles
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
