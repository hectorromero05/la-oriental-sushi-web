import { menuItems } from '../data.js';

export default function Menu() {
  return (
    <section className="menu section" id="menu">
      <div className="section-heading">
        <p className="eyebrow">Especialidades y menú</p>
        <h2>Favoritos para pedir, compartir y volver.</h2>
        <p>Precios de referencia para demo; confirma disponibilidad por WhatsApp.</p>
      </div>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <article className="menu-card" key={item.title}>
            <span className="menu-tag">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <strong>{item.price}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
