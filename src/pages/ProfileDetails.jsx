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
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light text-center p-4">
          <div>
            <h1 className="display-4 text-danger">Person Not Found</h1>
            <p className="fs-5 text-muted">
              😢 Sorry, we couldn't find the family member you're looking for.
            </p>
            <p className="mb-4">
              The profile may have been removed or the link is incorrect.
            </p>
            <Link to="/profiles" className=" btn profileBtn2 px-4 py-2">
              🔙 Back to Family Members
            </Link>
          </div>
        </div>
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
                <p className="fs-5 details-paragraph">
                  <strong>Gender:</strong> {person.gender}
                </p>
                <p className="fs-5 details-paragraph">
                  <strong>Date of Birth:</strong> {person.dob}
                </p>
                <p className="fs-5 details-paragraph">
                  <strong>Short Bio:</strong> {person.bio}
                </p>
                <p className="fs-5 details-paragraph">
                  <strong>Children:</strong>{" "}
                  {person.children?.join(", ") || "None"}
                </p>
                <p className="fs-5 details-paragraph">
                  <strong>Siblings:</strong>{" "}
                  {person.siblings?.join(", ") || "None"}
                </p>
              </div>
              ;
              <div className="mt-5">
                <button className="profileBtn2">
                  <Link
                    to="/profiles"
                    className="profileBtn2 mb-3"
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
