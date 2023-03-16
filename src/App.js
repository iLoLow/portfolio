import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";
import "./Styles/App.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
