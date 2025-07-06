import Navbar from "../components/NavBar";
import Hero from "../components/hero";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-3" style={{ fontFamily: "Cinzel, serif" }}>
            About the Akinlemibola Family
          </h2>
          <p
            className="lead"
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              fontFamily: "Merriweather, serif",
            }}
          >
            The Akinlemibola family is rooted in tradition, honor, and unity.
            From the great-great-great grandmother to today's children, this
            family has passed down values of wisdom, strength, and compassion.
          </p>
        </div>
      </section>
    </>
  );
}
export default Home;
