const Header = () => {
  return (
    <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                    <h1 className="display-4 mb-3 animated slideInDown">About Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-lg-6 animated fadeIn">
                    <img className="img-fluid animated pulse infinite" style={{ animationDuration: '3s'}} src="img/hero-2.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;