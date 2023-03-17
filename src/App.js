import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";
import "./Styles/App.css";
import Iconbar from "./components/Iconbar";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <AppRoutes />
        <Iconbar />
      </main>
      <Footer />
    </>
  );
}

export default App;
