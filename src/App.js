import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Seccion1 from "./components/Seccion1";
import MarcasCaroussel from "./components/MarcasCaroussel";
import MockupPortfolio from "./components/MockupPortfolio";
import ChatbotWidget from "./components/ChatbotWidget";
function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Seccion1 />
      <About />
      <MarcasCaroussel />
        <MockupPortfolio />
      <ChatbotWidget /> 
    
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
