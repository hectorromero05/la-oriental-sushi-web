import { restaurant, whatsappUrl } from '../data.js';

export default function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Inicio La Oriental Sushi">
        <img src="/logo.png" alt="" onError={(event) => event.currentTarget.classList.add('is-hidden')} />
        <span>{restaurant.name}</span>
      </a>
      <nav className="nav-links" aria-label="Navegación principal">
        <a href="#historia">Historia</a>
        <a href="#menu">Menú</a>
        <a href="#galeria">Galería</a>
        <a href="#ubicacion">Mapa</a>
      </nav>
      <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Reservar por WhatsApp">
        Reservar
      </a>
    </header>
  );
}
