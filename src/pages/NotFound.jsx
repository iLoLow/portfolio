import { Link } from "react-router-dom";

function NotFound() {
  document.title = "Not Found";
  return (
    <div>
      <h1>Une erreur c'est produite</h1>
      <Link to="/" aria-label="Accueil">
        <p>Retourner à l'acceuil</p>
      </Link>
    </div>
  );
}
export default NotFound;
