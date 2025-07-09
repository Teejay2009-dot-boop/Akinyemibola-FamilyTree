// src/pages/PersonDetails.jsx
import { useParams } from "react-router-dom";
import { familyMembers } from "../data/familyData"; // where your dummy data is
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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

      <div
        className="container pt-5"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className=" ">
          <div className="row g-0">
            <div className="col-md-4 text-center p-4">
              <img
                src={person.image || "/images/default-profile.png"}
                className="img-fluid rounded-circle mb-3"
                alt={person.name}
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
              <h3 className="fw-bold">{person.name}</h3>
              <p className="text-muted">{person.gender}</p>
            </div>

            <div className="col-md-8 p-4">
              <h5 className="mb-3">📝 Bio</h5>
              <p>{person.bio || "No biography available."}</p>

              <hr />

              <div className="row">
                <div className="col-sm-6">
                  <strong>📅 Date of Birth:</strong>
                  <p>{person.dob || "Unknown"}</p>
                </div>
                <div className="col-sm-6">
                  <strong>👶 Children:</strong>
                  <ul>
                    {person.children?.length ? (
                      person.children.map((child, i) => (
                        <li key={i}>{child}</li>
                      ))
                    ) : (
                      <li>None listed</li>
                    )}
                  </ul>
                </div>
                <div className="col-sm-6 mt-3">
                  <strong>👥 Siblings:</strong>
                  <ul>
                    {person.siblings?.length ? (
                      person.siblings.map((sib, i) => <li key={i}>{sib}</li>)
                    ) : (
                      <li>None listed</li>
                    )}
                  </ul>
                </div>
              </div>
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
      </div>

      <Footer />
    </>
  );
}
