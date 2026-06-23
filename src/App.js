import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Seccion1 from "./components/Seccion1";
import MarcasCaroussel from "./components/MarcasCaroussel";
import MockupPortfolio from "./components/MockupPortfolio";
import ChatbotWidget from "./components/ChatbotWidget";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
function App() {
  return (
    <div className="font-sans">
      <Header />
      <main className="pt-16 md:pt-32">
        <Hero />
        <Seccion1 />
        <About />
        <MarcasCaroussel />
        <MockupPortfolio />
        <ChatbotWidget />
        <TestimonialsCarousel />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
