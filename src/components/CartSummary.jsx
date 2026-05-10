import { formatPrice } from '../utils/format';

export function CartSummary({
  cart,
  subtotal,
  delivery,
  total,
  canCheckout,
  onRemove,
  onCheckout,
  onContinueShopping,
}) {
  return (
    <aside className="cart-summary" id="checkout">
      <div>
        <p className="eyebrow">Resumen</p>
        <h2>Tu pedido</h2>
      </div>

      {cart.length === 0 ? (
        <p className="empty-cart">
          El carrito esta vacio. Vuelve a la tienda, elige una zapatilla y selecciona talla, color y cantidad.
        </p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <article className="cart-item" key={item.lineId}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>
                  Talla {item.size} | {item.color} | x{item.quantity}
                </p>
                <strong>{formatPrice(item.price * item.quantity)}</strong>
              </div>
              <button type="button" onClick={() => onRemove(item.lineId)} aria-label={`Quitar ${item.name}`}>
                Quitar
              </button>
            </article>
          ))}
        </div>
      )}

      <div className="totals">
        <div>
          <span>Subtotal</span>
          <strong>{formatPrice(subtotal)}</strong>
        </div>
        <div>
          <span>Envio</span>
          <strong>{delivery === 0 ? 'Gratis' : formatPrice(delivery)}</strong>
        </div>
        <div className="total-row">
          <span>Total</span>
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>

      <div className="cart-actions">
        <button className="ghost-button checkout-button" type="button" onClick={onContinueShopping}>
          Seguir comprando
        </button>
        <button className="primary-button checkout-button" type="button" disabled={!canCheckout} onClick={onCheckout}>
          Enviar a WhatsApp
        </button>
      </div>
      {!canCheckout && cart.length > 0 && (
        <small className="checkout-hint">
          Completa tus datos de entrega para enviar el pedido.
        </small>
      )}
    </aside>
  );
}
