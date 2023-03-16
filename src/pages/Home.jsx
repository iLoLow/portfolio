import "../Styles/Home.css";
import avatar from "../assets/avatar.PNG";

function Home() {
  document.title = "SOYEZ Laurent Développeur WEB";

  return (
    <>
      <div className="home">
        <div className="header-home">
          <img className="avatar" src={avatar} alt="illustration de profil" />
          <h1 className="title-home">SOYEZ Laurent</h1>
        </div>
        <p>Dévelopeur Web freelance</p>
        <p>HTML/CSS | Javascript | React</p>
      </div>
    </>
  );
}
export default Home;
