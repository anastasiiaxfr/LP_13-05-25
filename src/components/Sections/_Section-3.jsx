import Img2 from "../../assets/img/img2.png";

function Section3() {
  return (
    <section className="section section_3" id="about">
      <div className="container">
        <div className="row_3">
          <div>
            <img src={Img2} alt="" />
          </div>
          <div>
            <div className="label">Problem & Solution</div>
            <h2>Saving Won’t Secure Your Future. Investing Will.</h2>
            <p className="text">
              In today’s economy, traditional saving methods are no longer
              enough. Our practical training gives you the knowledge and tools
              to turn your money into a reliable income stream — even if you’ve
              never invested before.
            </p>
            <a href="#contacts" className="btn">
              Start Now for Just £250
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
