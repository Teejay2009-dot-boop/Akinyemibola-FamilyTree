import React from "react";
import { Link } from "react-router-dom";

function MobileTreeRedirect() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center px-4">
      <h2 className="mb-3">Family Tree Not Available</h2>
      <p className="text-muted mb-4">
        The Akinlemibola family tree is best viewed on a desktop or laptop
        screen for full visibility.
      </p>
      <Link to="/" className="btn btn-dark">
        Return to Homepage
      </Link>
    </div>
  );
}

export default MobileTreeRedirect;
// This component is designed to be displayed when the user tries to access the family tree on a mobile device.
