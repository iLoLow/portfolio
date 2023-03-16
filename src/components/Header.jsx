import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Styles/Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" aria-label="Accueil">
        <img src={logo} className="logo-dev" alt="logo" />
      </Link>
      <nav>
        <NavLink className={({ isActive }) => (isActive ? "link link-active" : "link")} end to="/">
          Accueil
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link link-active" : "link")} end to="/projects">
          Mes créations
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link link-active" : "link")} end to="/about">
          À propos de moi
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "link link-active" : "link")} end to="/contact">
          Me contacter
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
