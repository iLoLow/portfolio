import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Gallery from "../components/Gallery";
import "../Styles/Projects.css";

function Projects() {
  document.title = "Mes créations";

  /* Creating a state for the data that will be fetched from the json file. */
  const [AllProjects, setAllProjects] = useState([]);
  /* A hook that allows to navigate to a specific page. */
  const navigation = useNavigate();

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((dataprojects) => setAllProjects(dataprojects))
      .catch(() => navigation("/error"));
  }, [navigation]);

  return (
    <>
      <div className="Projects">
        <h1 className="title-projects">
          <span>Mes créations :</span>
        </h1>

        <section className="cards-projects">
          <Gallery projects={AllProjects} />
        </section>
      </div>
    </>
  );
}
export default Projects;
