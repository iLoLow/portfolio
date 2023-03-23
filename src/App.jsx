import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";
import "./Styles/App.css";
import Iconbar from "./components/Iconbar";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className={`App ${theme === "dark" ? "dark" : ""}`}>
        <Header />
        <main className="main">
          <AppRoutes />
          <div className="darkMode">
            <input onClick={toggleTheme} type="checkbox" id="darkModeToggle"></input>
            <label className="toggle-label" htmlFor="darkModeToggle">
              <div className="toggle-background"></div>
              <div className="toggle-thumb"></div>
            </label>
          </div>
          <Iconbar />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
