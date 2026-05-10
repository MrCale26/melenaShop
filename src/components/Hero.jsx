import melenaHero from '../assets/melena-hero.jpeg';
import melenaLogo from '../assets/melena-logo.svg';

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-copy">
        <img className="hero-logo" src={melenaLogo} alt="MelenaShop la mejor seleccion" />
        <p className="eyebrow">Zapatillas express + ropa urbana</p>
        <h1>La mejor seleccion</h1>
        <p>
          Outfits con energia de barrio, naranja potente, negro firme y
          productos listos para romperla desde el primer paso.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#productos">
            Ver catalogo
          </a>
          <a className="ghost-button" href="#armar-pedido">
            Armar pedido
          </a>
        </div>
      </div>

      <div className="hero-panel" aria-label="Afiche MelenaShop">
        <img className="hero-real-image" src={melenaHero} alt="MelenaShop la mejor seleccion" />
      </div>
    </section>
  );
}
