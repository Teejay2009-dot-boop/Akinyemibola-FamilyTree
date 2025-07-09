import React from "react";

const Contact = () => {
  return (
    <section
      className="py-5 px-3 px-md-5 bg-light"
      id="contact"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-3">📬 Get in Touch</h2>
        <p className="text-center text-muted mb-5">
          Have questions, family stories to share, or corrections to the family
          tree? Reach out below.
        </p>

        <div
          className="row align-items-stretch"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          {/* Left: Contact Info */}
          <div className="col-md-5 mb-4 mb-md-0">
            <div className="bg-white shadow p-4 h-100 rounded">
              <h5 className="mb-3">📞 Contact Information</h5>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:akinlemibola.family@gmail.com">
                  akinlemibola.family@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong> +234 812 345 6789
              </p>
              <p>
                <strong>Location:</strong> Lagos, Nigeria
              </p>
              <hr />
              <h6 className="mt-4">🕒 Available Hours</h6>
              <p>Monday – Saturday: 9:00am – 5:00pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Right: Form with Formspree */}
          <div
            className="col-md-7"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="1000"
          >
            <div className="bg-white shadow p-4 rounded">
              <form action="https://formspree.io/f/xpwrvylg" method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    👤 Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    📧 Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    💬 Message
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  ✉️ Send Message
                </button>
              </form>
              <p
                className="mt-3 text-success text-center"
                style={{ fontSize: "0.9rem" }}
              >
                We’ll get back to you within 1–2 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
