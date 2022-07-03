import { Link } from "react-router-dom";

const Navbar = () => {

  const logOut = () => {
    localStorage.removeItem('authToken');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Students Portal
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="me-3">
              <div className="form-white input-group">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search or jump to... ( / )"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
              </div>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Home
                </Link>
              </li>
            </ul>
            <button onClick={logOut} className="d-flex flex-row ms-auto me-3">Logout</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
