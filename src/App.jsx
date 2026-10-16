import Header from "./components/Header";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Wellness from "./components/Wellness";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Activities />
        <Wellness />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
