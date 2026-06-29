import { restaurant, specialties } from '../data.js';

export default function About() {
  return (
    <section className="about section" id="historia">
      <div className="section-heading left">
        <p className="eyebrow">Nuestra historia</p>
        <h2>Un spot oriental cercano, limpio y pensado para antojos memorables.</h2>
      </div>
      <div className="about-grid">
        <article className="story-card">
          <p>
            La Oriental Sushi combina el carácter de la cocina japonesa urbana con la comodidad de pedir rápido por WhatsApp. Estamos en Santa Ana para recibirte, preparar tu pedido o ayudarte a ubicarte en segundos.
          </p>
          <p className="address">📍 {restaurant.address}</p>
        </article>
        <div className="specialty-list" aria-label="Especialidades">
          {specialties.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </section>
  );
}
