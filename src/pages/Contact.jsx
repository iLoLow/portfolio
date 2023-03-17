import Form from "../components/Form";
import "../Styles/Contact.css";

function Contact() {
  document.title = "Me contacter";
  return (
    <section className="section-mobile">
      <h1>Vous voulez un devis où plus d'information pour créer votre site Web ?</h1>
      <span className="mobile">
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
          <title>Call</title>
          <path
            d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z"
            fill="#1d3160"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="32"
          />
        </svg>

        <p className="number">06.35.36.13.09</p>
      </span>
      <a href="mailto:soyez.laurent.dev@gmail.com">
        {" "}
        <svg fill="#1d3160" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
          <title>Mail</title>
          <path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z" />
        </svg>
        <p>Me contacter</p>
      </a>
    </section>
  );
}
export default Contact;
