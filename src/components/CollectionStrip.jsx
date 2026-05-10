export function CollectionStrip({ collections }) {
  return (
    <section id="coleccion" className="strip">
      <div>
        <p className="eyebrow">Estilo urbano</p>
        <h2>Lo que mas sale en MelenaShop</h2>
      </div>
      <div className="chips">
        {collections.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
