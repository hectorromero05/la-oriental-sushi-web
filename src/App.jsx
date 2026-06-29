import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import Gallery from './components/Gallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import Location from './components/Location.jsx';
import Footer from './components/Footer.jsx';
import WhatsappButton from './components/WhatsappButton.jsx';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <Location />
        <section className="final-cta" aria-labelledby="cta-title">
          <p className="eyebrow">Reserva fácil</p>
          <h2 id="cta-title">Tu próxima mesa japonesa en Guadalajara está a un mensaje.</h2>
          <p>
            Escríbenos por WhatsApp, confirma ubicación en Google Maps y disfruta sushi moderno sin complicaciones.
          </p>
          <div className="cta-actions">
            <a className="btn btn-primary" href="https://wa.me/523338079519?text=Hola%2C%20quiero%20pedir%20o%20reservar%20en%20La%20Oriental%20Sushi." target="_blank" rel="noreferrer">
              Pedir por WhatsApp
            </a>
            <a className="btn btn-ghost" href="#ubicacion">Ver cómo llegar</a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
