import { restaurant, whatsappUrl } from '../data.js';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-copy reveal-up">
        <p className="eyebrow">Sushi japonés moderno · Guadalajara</p>
        <h1>Sabor oriental con estética premium y pedidos sin fricción.</h1>
        <p className="hero-text">
          Descubre La Oriental Sushi: rolls, arroces y especialidades calientes preparadas al momento en Santa Ana.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">Ordenar por WhatsApp</a>
          <a className="btn btn-secondary" href={restaurant.mapsUrl} target="_blank" rel="noreferrer">Abrir Google Maps</a>
        </div>
        <dl className="hero-metrics" aria-label="Datos rápidos">
          <div><dt>{restaurant.rating}</dt><dd>rating en Maps</dd></div>
          <div><dt>Santa Ana</dt><dd>Guadalajara</dd></div>
          <div><dt>WA</dt><dd>reservas directas</dd></div>
        </dl>
      </div>
      <div className="hero-visual" aria-label="Presentación visual de sushi">
        <img src="/hero.jpg" alt="Sushi de La Oriental Sushi" onError={(event) => event.currentTarget.classList.add('is-hidden')} />
        <div className="floating-card"><span>鮨</span><strong>Hecho al momento</strong><small>Rolls, combos y cocina oriental</small></div>
      </div>
    </section>
  );
}
