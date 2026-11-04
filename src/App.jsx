
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import Services from "./components/Services";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsApp from "./components/WhatsApp";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Destinations />
        <Packages />
        <Services />
        <About />
        <Reviews />
        <Contact />
      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}

export default App;
