import B1 from "../assets/img/brands/b1.png";
import B2 from "../assets/img/brands/b2.png";
import B3 from "../assets/img/brands/b3.png";
import B4 from "../assets/img/brands/b4.png";
import B5 from "../assets/img/brands/b5.png";

function Brands() {
  return (
    <section className="section_brands">
      <div className="container">
        <p>Collaborated with over 580+ trusted worldwide partners</p>
        <div className="brands">
          <img src={B1} alt="" />
          <img src={B2} alt="" />
          <img src={B3} alt="" />
          <img src={B4} alt="" />
          <img src={B5} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Brands;
