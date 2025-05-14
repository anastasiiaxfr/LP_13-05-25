import Logo from "../assets/img/logo-d.svg";
import { menu } from "../constants/index";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div>
            <a href="/" className="logo">
              <img src={Logo} alt="ProfitPath" />
            </a>
            <p className="footer_info">
              Feel free to call us in working hours Mon - Fri <br /> {"{8:00 - 16.00}"}. Our team will be happy to{" "}
              <br /> help answer your queries
            </p>
          </div>
          {menu && (
            <nav className="footer_top_nav">
              {menu.map((i, ind) => {
                return (
                  <a href={i.url} key={ind}>
                    {i.title}
                  </a>
                );
              })}
            </nav>
          )}
        </div>
      </div>
      <div className="footer_mdl">
        <div className="container">
          <p>
            <small>
              ProfitPath is a trading name of ProfitPath Capital Ltd, a financial services company registered in England
              and Wales (Company No. 13984215). ProfitPath is authorised and regulated by the Financial Conduct
              Authority (FCA) under license number FRN 824015. All investments involve risk. The value of your
              investment can go down as well as up, and you may not get back the full amount you invested. Any earnings
              or performance figures stated are examples and should not be considered as guarantees of future returns.
              Individual results may vary based on personal effort, market conditions, and investment strategy. The
              information provided on this website is for educational and informational purposes only and should not be
              considered financial or investment advice. We recommend consulting with a certified financial advisor
              before making any investment decisions. Past performance is not a reliable indicator of future
              performance. Capital is at risk. This platform is not intended for use by persons in jurisdictions where
              such use would be contrary to local laws or regulations.
            </small>
          </p>
        </div>
      </div>
      <div className="footer_btm">
        <div className="container">
          <p>Copyrigt © 2025 ProfitPath</p>
          <nav className="footer_btm_nav">
            <a href="/terms">Terms of Use</a> | <a href="/policy">Privacy Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
