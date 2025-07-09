export default function Footer() {
  return (
    <footer
      className="bg-dark text-light pt-5 pb-3 mt-5"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="row text-center text-md-start">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">About Us</h5>
            <p style={{ lineHeight: "1.7" }}>
              The Akinyemibola Family Tree website was created to preserve and
              celebrate our rich family heritage, connecting past, present, and
              future generations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/profiles" className="text-light text-decoration-none">
                  Family Members
                </a>
              </li>
              <li>
                <a href="/tree" className="text-light text-decoration-none">
                  Family Tree
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Contact</h5>
            <p>
              Email:{" "}
              <a href="mailto:familytree@example.com" className="text-light">
                familytree@example.com
              </a>
            </p>
            <p>Phone: +234 812 345 6789</p>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          <small>
            © {new Date().getFullYear()} Akinlemibola Family. Built with ❤️ by
            Teejay. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}
// This component defines the footer for the Akinyemibola Family Tree website.
// It includes sections for About Us, Quick Links, and Contact Information.
