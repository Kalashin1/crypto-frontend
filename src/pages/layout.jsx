import Footer from "./components/footer";
import Navbar from "./components/navbar";

const Layout = ({
  // eslint-disable-next-line react/prop-types
  children,
}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
