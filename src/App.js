import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Packages from "./components/Packages";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Gallery />
      <Packages />
      <Contact />

      {/* WhatsApp */}
      <a href="https://wa.me/1234567890" className="whatsapp">💬</a>

      <Footer />
    </>
  );
}

export default App;