import Img1 from "../../assets/img/img1.png";

function Section2() {
  return (
    <section className="section section_2">
      <div className="container">
        <div className="row_2">
          <div>
            <div className="label">Benefits & Guarantee</div>
            <h2>What You Get With This £250 Programme:</h2>
            <ul className="list">
              <li>A step-by-step investment strategy</li>
              <li>Personal support from real experts</li>
              <li>Tools to build long-term financial stability</li>
              <li>Guaranteed income after completing the course*</li>
              <li>Trusted by 200,000+ people in the UK and US</li>
            </ul>
            <p>
              <small>*Terms apply. Earnings depend on course completion and following the strategy.</small>
            </p>
          </div>
          <div>
            <img src={Img1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
