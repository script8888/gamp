import React from "react";
import { Link } from "react-router-dom";
import logo from "../Login/img/gampLogo.png";
import menuIco from "./img/navIco.png";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <img className="logo" src={logo} alt="logo" />
      <img className="menuIco" src={menuIco} alt="menu icon" />
      <div className="navLinks">
        <Link to="/PPlans">Repair</Link>
        <Link to="/PPlans">Business</Link>
        <Link to="/PPlans">Protect Device</Link>
        <Link to="/PPlans">
          <div className="userNameLink">
            <span className="material-icons ico userNameIco">person</span>{" "}
            &nbsp; &nbsp; <p>Hi, Omotayo</p>
            <span className="material-icons arrowIcoNav">arrow_drop_down</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
