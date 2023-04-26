import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const Layout = () => {
  return (
    <div>
      <header>Nav</header>
      <main>
        <Outlet />
      </main>

      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
