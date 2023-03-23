import { Link } from "react-router-dom";
import "../Styles/Notfound.css";

function NotFound() {
  document.title = "Not Found";
  return (
    <section className="notFound">
      <h1>Oh oh ! Cette page semble s'être perdue dans l'espace.</h1>
      <p>Nous travaillons dur pour la retrouver, en attendant, pourquoi ne pas explorer nos autres pages pour trouver ce que vous cherchez ?"</p>
      <Link to="/" aria-label="Accueil">
        <p>Retourner à l'acceuil</p>
      </Link>
    </section>
  );
}
export default NotFound;
