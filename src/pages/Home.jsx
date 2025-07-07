import Navbar from "../components/NavBar";
import Hero from "../components/hero";
import ImageSlider from "../components/SliderComponent";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="mb-3 about-head">The Akinlemibola Family</h1>
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://laurenkaysims.com/wp-content/uploads/2023/09/IMG_0458-2.jpg"
                alt=""
                className="img-fluid "
                style={{ height: "500px", width: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="col-lg-6">
              <h1 className="fs-1 fw-bold text-start">About Us</h1>
              <p className="text-start">
                The Akinlemibola family is a lineage deeply rooted in tradition,
                strength, and unity. From the earliest known matriarch, Iya Agba
                Akinlemibola, our family has passed down not only names and
                stories but also the values that shaped who we are today. Her
                wisdom, resilience, and unwavering love laid the foundation for
                the generations that followed. Across time, the Akinlemibola
                name has become more than just a surname — it is a symbol of
                perseverance, integrity, and connection. Our ancestors faced
                challenges with grace and led with dignity. Each branch of this
                family tree represents decades of sacrifice, hard work, and care
                — and each member, past and present, plays a part in preserving
                that legacy. This website is more than a digital archive. It is
                a tribute to our shared history — a space where stories are
                remembered, names are honored, and future generations can
                discover where they come from. Whether you're learning about
                your great-grandparents or introducing your children to their
                roots, this platform serves as a living memory of who we are and
                how far we've come. As the family continues to grow, across
                borders and generations, may we never forget the roots that hold
                us together. The Akinlemibola story is still being written — and
                this is only the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <h2 className="text-center ">Family Moments</h2>
        <ImageSlider />
      </section>

      <Footer />
    </>
  );
}
export default Home;
