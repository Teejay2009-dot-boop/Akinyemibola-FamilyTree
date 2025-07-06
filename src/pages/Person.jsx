import React from "react";
import { useParams, Link } from "react-router-dom";
import { familyMembers } from "../data/familyData.js";
import Navbar from "../components/NavBar";

function MemberProfile() {
  const { id } = useParams();
  const member = familyMembers.find((m) => m.id === parseInt(id));

  if (!member) {
    return (
      <>
        <Navbar></Navbar>
        <div className="container py-5 text-center">
          <h2>Member not found</h2>
          <Link to="/profiles" className="btn btn-secondary mt-3">
            Back to Profiles
          </Link>
        </div>
        ;
      </>
    );
  }

  // Get children's names
  const children = member.children?.map(
    (childId) => familyMembers.find((m) => m.id === childId)?.name
  );

  // Get siblings' names
  const siblings = member.siblings?.map(
    (sibId) => familyMembers.find((m) => m.id === sibId)?.name
  );

  return (
    <>
      <Navbar></Navbar>
      <div className="container py-5">
        <h2 className="mb-3">{member.name}</h2>
        <p>
          <strong>Generation:</strong> {member.generation}
        </p>
        <p>
          <strong>Role:</strong> {member.role}
        </p>
        <p>
          <strong>Gender:</strong> {member.gender}
        </p>
        <p>
          <strong>Date of Birth:</strong> {member.dob}
        </p>
        <p>
          <strong>Short Bio:</strong> {member.bio}
        </p>

        <div className="mt-4">
          <h5>Children</h5>
          {children?.length > 0 ? (
            <ul>
              {children.map((child, idx) => (
                <li key={idx}>{child}</li>
              ))}
            </ul>
          ) : (
            <p>None listed</p>
          )}
        </div>

        <div className="mt-4">
          <h5>Siblings</h5>
          {siblings?.length > 0 ? (
            <ul>
              {siblings.map((sib, idx) => (
                <li key={idx}>{sib}</li>
              ))}
            </ul>
          ) : (
            <p>None listed</p>
          )}
        </div>

        <Link to="/profiles" className="btn btn-outline-secondary mt-4">
          ← Back to Profiles
        </Link>
      </div>
    </>
  );
}

export default MemberProfile;
