import Slider from "../components/Slider";
import "../Styles/Projects.css";

function Projects() {
  document.title = "Mes créations";

  return (
    <>
      <div className="Projects">
        <h1 className="title-projects">
          <span>Mes créations :</span>
        </h1>

        <section className="cards-projects">
          <Slider />
        </section>
      </div>
    </>
  );
}
export default Projects;
