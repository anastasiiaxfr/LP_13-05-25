import Stars from "../../assets/img/stars.svg";
import Ava1 from "../../assets/img/comments/ava1.png";
import Ava2 from "../../assets/img/comments/ava2.png";

export default function Section1() {
  return (
    <section className="section section_1" id="testimonials">
      <div className="container">
        <div className="row_1">
          <div>
            <div className="label">Trust & Social Proof</div>
            <h2>Join 200,000+ Britons and Americans Already Earning Daily</h2>
            <p className="text">
              This training has already changed the lives of thousands of people
              aged 35–65. Whether you're looking to supplement your pension,
              escape the cost-of-living pressure, or finally take control of
              your finances — you’re not alone. Graduates of our programme now
              earn daily thanks to the knowledge and tools they gained.
            </p>
            <a href="#contacts" className="btn">
              Start Now for Just £250
            </a>
          </div>
          <div>
            <div className="testimonials">
              <figure className="testimonial">
                <img src={Ava1} alt="" className="testimonial_ava" />
                <div className="testimonial_title">Sophia M</div>
                <div className="testimonial_info">Teacher</div>
                <div className="testimonial_comment">
                  <p>
                    Finally understood investing! Made back my £2480 in 11 days.
                    Life-changing for rural professionals.
                  </p>
                  <img src={Stars} alt="Rating 5/5" />
                </div>
              </figure>
              <figure className="testimonial">
                <img src={Ava2} alt="" className="testimonial_ava" />
                <div className="testimonial_title">Daniel W</div>
                <div className="testimonial_info">Manager</div>
                <div className="testimonial_comment">
                  <p>
                    From financial stress to confidence. Now earning while I
                    sleep – just 30 mins/day monitoring.
                  </p>
                  <img src={Stars} alt="Rating 5/5" />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
