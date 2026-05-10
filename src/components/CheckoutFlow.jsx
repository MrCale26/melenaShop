import { ProductBuilder } from './ProductBuilder';

export function CheckoutFlow({
  product,
  selectedSize,
  selectedColor,
  quantity,
  orderStatus,
  onSizeChange,
  onColorChange,
  onQuantityChange,
  onAddToCart,
  onViewCart,
}) {
  return (
    <section className="shop-flow" id="armar-pedido">
      <ProductBuilder
        product={product}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        quantity={quantity}
        onSizeChange={onSizeChange}
        onColorChange={onColorChange}
        onQuantityChange={onQuantityChange}
        onAddToCart={onAddToCart}
        onViewCart={onViewCart}
      />
      {orderStatus && <div className="order-toast">{orderStatus}</div>}
    </section>
  );
}
