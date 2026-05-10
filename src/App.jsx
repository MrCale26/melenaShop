import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { useShop } from './hooks/useShop';
import { CartView } from './views/CartView';
import { HomeView } from './views/HomeView';

export function App() {
  const shop = useShop();

  return (
    <main>
      <Header
        cartCount={shop.cartCount}
        currentView={shop.currentView}
        onNavigate={shop.navigate}
      />
      {shop.currentView === 'cart' ? <CartView shop={shop} /> : <HomeView shop={shop} />}
      <Footer />
    </main>
  );
}
