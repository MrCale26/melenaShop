import { formatPrice } from '../utils/format';

export function ProductBuilder({
  product,
  selectedSize,
  selectedColor,
  quantity,
  onSizeChange,
  onColorChange,
  onQuantityChange,
  onAddToCart,
  onViewCart,
}) {
  const isSoldOut = product.status === 'sold-out' || product.stock === 0;
  const canAdd = Boolean(selectedSize && selectedColor && !isSoldOut);

  return (
    <section className="builder" aria-label="Armar compra">
      <div className="builder-gallery">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="builder-panel">
        <p className="eyebrow">Elige tu producto</p>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <strong className="builder-price">{formatPrice(product.price)}</strong>
        <span className={isSoldOut ? 'stock-label sold-out' : 'stock-label'}>
          {isSoldOut ? 'Agotado por ahora' : `${product.stock} unidades disponibles`}
        </span>

        <div className="option-group">
          <span>Talla</span>
          <div className="option-row">
            {product.sizes.map((size) => (
              <button
                className={selectedSize === size ? 'option-button active' : 'option-button'}
                key={size}
                type="button"
                onClick={() => onSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="option-group">
          <span>Color</span>
          <div className="option-row">
            {product.colors.map((color) => (
              <button
                className={selectedColor === color ? 'option-button active' : 'option-button'}
                key={color}
                type="button"
                onClick={() => onColorChange(color)}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        <div className="quantity-row">
          <span>Cantidad</span>
          <div className="stepper">
            <button type="button" onClick={() => onQuantityChange(Math.max(1, quantity - 1))}>
              -
            </button>
            <strong>{quantity}</strong>
            <button
              type="button"
              disabled={quantity >= product.stock}
              onClick={() => onQuantityChange(Math.min(product.stock, quantity + 1))}
            >
              +
            </button>
          </div>
        </div>

        <div className="builder-actions">
          <button className="primary-button builder-button" type="button" disabled={!canAdd} onClick={onAddToCart}>
            Agregar al carrito
          </button>
          <button className="ghost-button builder-button" type="button" onClick={onViewCart}>
            Ver carrito
          </button>
        </div>
        {!canAdd && (
          <small>
            {isSoldOut ? 'Este producto no se puede comprar ahora.' : 'Selecciona talla y color para continuar.'}
          </small>
        )}
      </div>
    </section>
  );
}
