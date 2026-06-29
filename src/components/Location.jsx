import { restaurant, whatsappUrl } from '../data.js';

export default function Location() {
  return (
    <section className="location section" id="ubicacion">
      <div className="location-copy">
        <p className="eyebrow">Mapa y contacto</p>
        <h2>Llega fácil a La Oriental Sushi o pide antes de salir.</h2>
        <ul>
          <li><strong>Dirección:</strong> {restaurant.address}</li>
          <li><strong>Teléfono:</strong> <a href="tel:+523338079519">{restaurant.phone}</a></li>
          <li><strong>Horario:</strong> {restaurant.hours}</li>
        </ul>
        <div className="location-actions">
          <a className="btn btn-primary" href={restaurant.mapsUrl} target="_blank" rel="noreferrer">Abrir Google Maps</a>
          <a className="btn btn-secondary" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <iframe
        title="Mapa de La Oriental Sushi en Guadalajara"
        src="https://www.google.com/maps?q=20.6250287,-103.4649417&z=17&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
