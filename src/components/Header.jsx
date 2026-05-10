import melenaLogo from '../assets/melena-logo.svg';

export function Header({ cartCount, currentView, onNavigate }) {
  return (
    <header className="navbar">
      <button
        className="brand brand-button"
        type="button"
        onClick={() => onNavigate('home')}
        aria-label="MelenaShop inicio"
      >
        <img src={melenaLogo} alt="MelenaShop" />
      </button>
      <nav>
        <button
          className={currentView === 'home' ? 'nav-button active' : 'nav-button'}
          type="button"
          onClick={() => onNavigate('home')}
        >
          Tienda
        </button>
        <button
          className={currentView === 'cart' ? 'nav-button active' : 'nav-button'}
          type="button"
          onClick={() => onNavigate('cart')}
        >
          Carrito
        </button>
        <button
          className="cart-pill"
          type="button"
          onClick={() => onNavigate('cart')}
          aria-label="Ver carrito"
        >
          {cartCount}
        </button>
      </nav>
    </header>
  );
}
