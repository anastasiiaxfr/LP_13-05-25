import { Outlet } from "react-router";
import Footer from "../components/TheFooter";
import Header from "../components/TheHeader";

function Layout() {
  return (
    <>
      <div className="page">
        <Header />

        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
