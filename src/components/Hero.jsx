import Img from "../assets/img/img3.jpg";

function Hero() {
  return (
    <section className="section_hero">
      <div className="container">
        <div className="row_4">
          <div>
            <div className="labels">
              <div className="label active">Income</div>
              <div className="label">Learn How</div>
            </div>
            <h1>Turn £250 Into Real Monthly Income — Learn How</h1>
            <p className="text">
              Discover how to grow your capital through smart investing. Join
              our expert-led training and receive guaranteed returns after
              completion — no prior experience required.
            </p>
            <a href="#contacts" className="btn">
              Get Started Now
            </a>
          </div>
          <div>
            <img src={Img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
