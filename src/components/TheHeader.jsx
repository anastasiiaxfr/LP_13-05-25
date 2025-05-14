import { useState } from "react";

import Logo from "../assets/img/logo.svg";
import { menu } from "../constants/index";
import { Menu, X } from "lucide-react";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <a href="/" className="logo">
            <img src={Logo} alt="ProfitPath" />
          </a>

          {menu && (
            <nav className="menu">
              {menu.map((i, ind) => (
                <a href={i.url} key={ind}>
                  {i.title}
                </a>
              ))}
            </nav>
          )}

          <div className="btns">
            <a href="#contacts" className="btn">
              Get Started Now
            </a>
            <button onClick={toggleNavbar} className="menu_toggle">
              {drawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      {drawerOpen && (
        <nav className="drawer">
          <div className="drawer_header">
            <a href="/" className="logo">
              <img src={Logo} alt="ProfitPath" />
            </a>
            <button onClick={toggleNavbar} class="menu_toggle">
              {drawerOpen ? <X /> : <Menu />}
            </button>
          </div>
          {menu && (
            <nav className="drawer_menu">
              {menu.map((i, ind) => (
                <a href={i.url} key={ind} onClick={closeDrawer}>
                  {i.title}
                </a>
              ))}
            </nav>
          )}
          <hr className="divider" />
          <a href="#contacts" className="btn" onClick={closeDrawer}>
            Get Started Now
          </a>
        </nav>
      )}
    </>
  );
}

export default Header;
