import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../Styles/MenuBurger.css";

function MenuBurger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)} className={isOpen ? "MenuBurger open" : "MenuBurger"}>
        <span className="Burger"></span>
      </div>
      {isOpen && (
        <nav className="NavMobile">
          <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "link link-active" : "link")} end to="/">
            Accueil
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "link link-active" : "link")} end to="/projects">
            Mes créations
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "link link-active" : "link")} end to="/about">
            À propos de moi
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "link link-active" : "link")} end to="/contact">
            Me contacter
          </NavLink>
        </nav>
      )}
    </>
  );
}

export default MenuBurger;
