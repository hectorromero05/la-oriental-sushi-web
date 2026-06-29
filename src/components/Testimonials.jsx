import { restaurant } from '../data.js';

const testimonials = [
  'Ideal para descubrir sushi en Santa Ana con atención directa por WhatsApp.',
  'Sabores orientales, ubicación clara y una experiencia pensada para pedir rápido.',
  'Una propuesta moderna para comer rico sin perder tiempo buscando cómo llegar.',
];

export default function Testimonials() {
  return (
    <section className="testimonials section" id="resenas">
      <div className="section-heading left">
        <p className="eyebrow">Reseñas y confianza</p>
        <h2>Prueba social lista para crecer con cada cliente satisfecho.</h2>
        <p>Rating actual mostrado en Google Maps: {restaurant.rating}. Reseñas registradas: {restaurant.reviews}.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((text) => (
          <article className="testimonial-card" key={text}>
            <div className="stars" aria-label="Cinco estrellas">★★★★★</div>
            <p>“{text}”</p>
            <strong>Cliente de La Oriental Sushi</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
