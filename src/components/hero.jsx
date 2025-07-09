function Hero() {
  return (
    <>
      <div
        className="hero-section "
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <div className="text-center">
          <h1
            className="mb-3 text-white hero-head"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            A Lineage of Grace and Tenacity
          </h1>
          <p
            className="lead text-white"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            Preserving the legacy and lineage of the Akinlemibola family — from
            our great-great-great grandmother to the youngest generation today.
          </p>
        </div>
        <div
          className="text-center mt-4"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <a href="/tree" className="btn btn-primary btn me-2 tree-btn">
            View Family Tree
          </a>
          <a href="/lineage" className="btn btn-outline-secondary btn">
            Explore Lineage
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
