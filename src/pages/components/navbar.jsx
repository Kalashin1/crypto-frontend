import {Link} from 'react-router-dom';
import APP_SCREENS from '../../navigation/constants'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
      <Link to={APP_SCREENS.HOME} className="navbar-brand d-flex align-items-center">
        <h2 className="m-0 text-primary">
          <img
            className="img-fluid me-2"
            src="img/icon-1.png"
            alt=""
            style={{ width: "45px" }}
          />
          CryptoCoin
        </h2>
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-4 py-lg-0">
          <Link to={APP_SCREENS.HOME} className="nav-item nav-link active">
            Home
          </Link>
          <Link to={APP_SCREENS.ABOUT} className="nav-item nav-link">
            About
          </Link>
          <Link to={APP_SCREENS.SERVICES} className="nav-item nav-link">
            Service
          </Link>
          <Link to={APP_SCREENS.FEATURES} className="nav-item nav-link">
            Features
          </Link>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu shadow-sm m-0">
              <a href="feature.html" className="dropdown-item">
                Feature
              </a>
              <a href="token.html" className="dropdown-item">
                Token Sale
              </a>
              <Link to={APP_SCREENS.FAQ} className="dropdown-item">
                FAQs
              </Link>
              <a href="404.html" className="dropdown-item">
                404 Page
              </a>
            </div>
          </div>
          <Link to={APP_SCREENS.CONTACT} className="nav-item nav-link">
            Contact
          </Link>
        </div>
        <div className="h-100 d-lg-inline-flex align-items-center d-none">
          <a
            className="btn btn-square rounded-circle bg-light text-primary me-2"
            href=""
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="btn btn-square rounded-circle bg-light text-primary me-2"
            href=""
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="btn btn-square rounded-circle bg-light text-primary me-0"
            href=""
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
