import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import logoWhite from "../assets/logowhite.png";
import "../Styles/Header.css";
import MenuBurger from "./MenuBurger";

function Header() {
  return (
    <header className="header">
      <Link className="LogoLink" to="/" aria-label="Accueil">
        <div className="logo-dev">
          <img src={logo} className="logoBlack" alt="logo black" />
          <img src={logoWhite} alt="logo white" className="logoWhite" />
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
