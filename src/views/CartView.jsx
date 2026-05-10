import { CartSummary } from '../components/CartSummary';

export function CartView({ shop }) {
  return (
    <section className="cart-page">
      <div className="cart-page-heading">
        <p className="eyebrow">Carrito</p>
        <h1>Revisa tu pedido</h1>
        <p>
          Confirma tallas, colores y cantidades. Al finalizar se abrira WhatsApp
          con el detalle listo para enviar.
        </p>
      </div>

      <CartSummary
        cart={shop.cart}
        subtotal={shop.subtotal}
        delivery={shop.delivery}
        total={shop.total}
        onRemove={shop.removeFromCart}
        onCheckout={shop.checkoutByWhatsApp}
        onContinueShopping={() => shop.navigate('home')}
      />

      {shop.orderStatus && <div className="order-toast">{shop.orderStatus}</div>}
    </section>
  );
}
