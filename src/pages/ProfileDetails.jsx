// src/pages/PersonDetails.jsx
import { useParams } from "react-router-dom";
import { familyMembers } from "../data/familyData"; // where your dummy data is

export default function PersonDetails() {
  const { id } = useParams();
  const person = familyMembers.find((p) => p.id === parseInt(id));

  if (!person) {
    return <div className="text-center py-5">Person not found</div>;
  }

  return (
    <div className="container py-5">
      <h2>{person.name}</h2>
      <p>
        <strong>Gender:</strong> {person.gender}
      </p>
      <p>
        <strong>Date of Birth:</strong> {person.dob}
      </p>
      <p>
        <strong>Short Bio:</strong> {person.bio}
      </p>
      <p>
        <strong>Children:</strong> {person.children?.join(", ") || "None"}
      </p>
      <p>
        <strong>Siblings:</strong> {person.siblings?.join(", ") || "None"}
      </p>
    </div>
  );
}
