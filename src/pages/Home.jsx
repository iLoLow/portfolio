import "../Styles/Home.css";
import avatar from "../assets/avatar.PNG";

function Home() {
  document.title = "SOYEZ Laurent Développeur WEB";

  return (
    <>
      <div className="home">
        <div className="header-home">
          {/* <img className="avatar" src="" alt="illustration de profil" /> */}
          <h1 className="title-home">SOYEZ Laurent</h1>
          <p>Développeur Web freelance</p>
          <p>HTML/CSS | Javascript | React</p>
        </div>
      </div>
    </>
  );
}
export default Home;
