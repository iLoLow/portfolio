import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../Styles/Header.css";
import MenuBurger from "./MenuBurger";

function Header() {
  return (
    <header className="header">
      <Link className="LogoLink" to="/" aria-label="Accueil">
        <div>
          <img src={logo} className="logo-dev" alt="logo" />
        </div>
      </Link>

      <nav className="navDesktop">
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

      <MenuBurger />
    </header>
  );
}

export default Header;
