import { CartSummary } from '../components/CartSummary';
import { CustomerForm } from '../components/CustomerForm';

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

      <div className="cart-layout">
        <CustomerForm
          customer={shop.customer}
          onCustomerChange={shop.setCustomer}
        />
        <CartSummary
          cart={shop.cart}
          subtotal={shop.subtotal}
          delivery={shop.delivery}
          total={shop.total}
          canCheckout={shop.canCheckout}
          onRemove={shop.removeFromCart}
          onCheckout={shop.checkoutByWhatsApp}
          onContinueShopping={() => shop.navigate('home')}
        />
      </div>

      {shop.orderStatus && <div className="order-toast">{shop.orderStatus}</div>}
    </section>
  );
}
