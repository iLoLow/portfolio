import "../Styles/CardProjects.css";

function CardProjects({ data }) {
  const { title, cover, description, link } = data;
  const reRouteTo = (lien) => {
    window.open(lien, "_blank", "noreferrer noopener");
  };

  return (
    <article className="card-Project" onClick={() => reRouteTo(link)}>
      <h2 className="title">{title}</h2>
      <p>{description}</p>
      <img src={cover} alt={title} />
    </article>
  );
}

export default CardProjects;
