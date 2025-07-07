import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light text-center p-4">
        <div>
          <h1 className="display-1 fw-bold text-danger">404</h1>
          <p className="fs-4">😕 Oops! This page doesn't exist.</p>
          <p className="text-muted mb-4">
            It looks like the page you're looking for has been moved or never
            existed.
          </p>
          <Link to="/" className="btn  px-4 py-2 notFoundBtn">
            ⬅️ Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
// This component displays a 404 Not Found page with a message and a link back to the home page.
// It uses Bootstrap classes for styling and layout, ensuring a responsive and user-friendly design.
