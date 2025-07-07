import { Link } from "react-router-dom";
import Profiles from "../pages/Profiles";
import PersonDetails from "../pages/ProfileDetails";
function ProfileCard({ image, role, generation, name, gender, id }) {
  return (
    <div className="profile-card">
      <img src={image} alt="Profile" style={{ width: "100%" }} />
      <h2>{name}</h2>
      <p>
        <b>Role:</b>
        {role}
      </p>
      <p>
        <b>Generation: </b>
        {generation}
      </p>
      <p>
        <b>Gender: </b>
        {gender}
      </p>
      <button className="profileBtn">
        <Link
          to={`/profiles/${id}`} // Use the id to link to the profile details
          element={<Profiles />}
          className="profileBtn"
          style={{ textDecoration: "none" }}
        >
          View Profile
        </Link>
      </button>
    </div>
  );
}

export default ProfileCard;

// <div className="card h-100 shadow-sm">
//                   <div className="card-body text-center">
//                     <h5 className="card-title">{member.name}</h5>
//                     <p className="card-text mb-1">
//                       <strong>Generation:</strong> {member.generation}
//                     </p>
//                     <p className="card-text mb-1">
//                       <strong>Role:</strong> {member.role}
//                     </p>
//                     <p className="card-text">
//                       <strong>Gender:</strong> {member.gender}
//                     </p>
//                   </div>
//                 </div>
