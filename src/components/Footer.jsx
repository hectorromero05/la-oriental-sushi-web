import { restaurant, whatsappUrl } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src="/logo.png" alt="Logo de La Oriental Sushi" onError={(event) => event.currentTarget.classList.add('is-hidden')} />
        <h2>{restaurant.name}</h2>
        <p>Restaurante chino / sushi en Guadalajara con pedidos y reservaciones por WhatsApp.</p>
      </div>
      <nav aria-label="Navegación de pie de página">
        <a href="#historia">Historia</a>
        <a href="#menu">Menú</a>
        <a href="#galeria">Galería</a>
        <a href="#ubicacion">Ubicación</a>
      </nav>
      <div className="footer-contact">
        <a href={whatsappUrl} target="_blank" rel="noreferrer">{restaurant.phone}</a>
        <span>© 2026 La Oriental Sushi</span>
      </div>
    </footer>
  );
}
