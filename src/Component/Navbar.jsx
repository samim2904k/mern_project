import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">MyPortfolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["Home", "CountButton", "Users", "ApiConnectivity", "Fruits", "Properties", "HandleState", "HandleForm", "UCcomponent", "UseEffect", "ArrayUseEffect", "useContext", "useCallback", "useMemo", "useNavigate", "Forms"].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link nav-hover" to={`/${item.replace(' ','').toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
