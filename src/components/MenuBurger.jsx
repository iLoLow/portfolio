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
            <span className="NavmobileFlex">
              <span className="NavMobileSvgHome">
                <svg fill="#72d2e1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z" />
                </svg>
              </span>
              Accueil
            </span>
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "link link-active" : "link")} end to="/projects">
            <span className="NavmobileFlex">
              <span className="NavMobileSvgHome">
                <svg fill="#72d2e1" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                  <title>Code Slash</title>
                  <path d="M160 389a20.91 20.91 0 01-13.82-5.2l-128-112a21 21 0 010-31.6l128-112a21 21 0 0127.66 31.61L63.89 256l109.94 96.19A21 21 0 01160 389zM352 389a21 21 0 01-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0127.66-31.61l128 112a21 21 0 010 31.6l-128 112A20.89 20.89 0 01352 389zM208 437a21 21 0 01-20.12-27l96-320a21 21 0 1140.23 12l-96 320A21 21 0 01208 437z" />
                </svg>
              </span>
              Mes créations
            </span>
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "link link-active" : "link")} end to="/about">
            <span className="NavmobileFlex">
              <span className="NavMobileSvgHome">
                <svg fill="#72d2e1" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                  <title>Person Circle</title>
                  <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm2 96a72 72 0 11-72 72 72 72 0 0172-72zm-2 288a175.55 175.55 0 01-129.18-56.6C135.66 329.62 215.06 320 256 320s120.34 9.62 129.18 55.39A175.52 175.52 0 01256 432z" />
                </svg>
              </span>
              À propos de moi
            </span>
          </NavLink>
          <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? "link link-active" : "link")} end to="/contact">
            <span className="NavmobileFlex">
              <span className="NavMobileSvgHome">
                <svg fill="#72d2e1" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                  <title>Mail Unread</title>
                  <path d="M374.09 101c-.11.23-.21.46-.31.7-.34.75-.67 1.5-1 2.26l-.36.9c-.27.71-.54 1.42-.79 2.14-.12.35-.24.7-.35 1-.23.68-.44 1.37-.64 2.07l-.33 1.15q-.27 1-.51 2c-.1.41-.2.82-.28 1.23-.15.67-.28 1.36-.4 2-.08.42-.16.84-.23 1.27-.11.69-.2 1.4-.29 2.1-.05.42-.11.83-.16 1.25-.08.77-.13 1.54-.19 2.31 0 .36-.06.72-.08 1.09-.06 1.13-.09 2.27-.09 3.41 0 1 0 2 .07 2.94v.62c.05.95.12 1.89.21 2.83l.06.46c.09.87.2 1.72.32 2.57 0 .15 0 .31.07.46.14.92.31 1.84.49 2.75l.12.59c.2.92.4 1.84.64 2.75.23.92.5 1.82.77 2.71.06.19.12.38.17.57.28.88.57 1.74.88 2.59.05.15.11.29.16.43.29.78.6 1.55.92 2.32.05.14.11.28.17.42.35.83.73 1.65 1.11 2.47l.27.53c.4.82.81 1.64 1.24 2.44a64.21 64.21 0 0029.56 27.63l.37.17c1.78.8 3.59 1.53 5.45 2.17l.95.32 1.5.47c.45.14.9.26 1.36.39l1.92.5c.57.14 1.14.27 1.72.39l1.15.24 1.83.32.93.16c.9.13 1.81.24 2.72.34l.77.07c.73.07 1.47.13 2.22.17l.85.05c1 0 1.94.07 2.93.07 1.15 0 2.29 0 3.43-.09l1.09-.09c.77 0 1.54-.11 2.3-.19.42 0 .83-.1 1.25-.16.7-.08 1.41-.17 2.1-.28l1.27-.23c.68-.12 1.36-.25 2-.39l1.24-.29c.67-.16 1.35-.32 2-.51.39-.1.78-.21 1.16-.33.69-.2 1.37-.41 2.05-.63l1.07-.36c.7-.24 1.4-.5 2.1-.77l.94-.37c.74-.3 1.47-.62 2.19-.95l.77-.34c.8-.37 1.58-.77 2.36-1.17.17-.09.35-.17.52-.27.91-.48 1.8-1 2.68-1.5l.12-.07a63.95 63.95 0 10-89.21-84.88l-.21.39c-.3 1.03-.72 1.86-1.11 2.69z" />
                  <path d="M371.51 202.43l-105.69 82.2a16 16 0 01-19.64 0L89.55 162.81l19.64-25.26L256 251.73l94.36-73.39A95.81 95.81 0 01349 80H48a16 16 0 00-16 16v320a16 16 0 0016 16h416a16 16 0 0016-16V211.13a95.75 95.75 0 01-108.49-8.7z" />
                </svg>
              </span>
              Me contacter
            </span>
          </NavLink>
        </nav>
      )}
    </>
  );
}

export default MenuBurger;
