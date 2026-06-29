const images = [
  ['/galeria1.jpg', 'Rollos de sushi servidos con detalle'],
  ['/galeria2.jpg', 'Especialidad oriental de la casa'],
  ['/galeria3.jpg', 'Platillo japonés fresco'],
];

export default function Gallery() {
  return (
    <section className="gallery section" id="galeria">
      <div className="section-heading">
        <p className="eyebrow">Galería</p>
        <h2>Texturas, color y antojo desde el primer vistazo.</h2>
      </div>
      <div className="gallery-grid">
        {images.map(([src, alt], index) => (
          <figure className={`gallery-item item-${index + 1}`} key={src}>
            <img src={src} alt={alt} loading="lazy" onError={(event) => event.currentTarget.classList.add('is-hidden')} />
          </figure>
        ))}
      </div>
    </section>
  );
}
