import { formatPrice } from '../utils/format';

export function ProductCard({ product, isSelected, onSelect }) {
  const isSoldOut = product.status === 'sold-out' || product.stock === 0;

  return (
    <article className={`product-card ${isSelected ? 'is-selected' : ''} ${isSoldOut ? 'is-sold-out' : ''}`}>
      <img src={product.image} alt={product.name} />
      {isSoldOut && <strong className="sold-out-badge">Agotado</strong>}
      <div className="product-info">
        <span>{product.tag}</span>
        <h3>{product.name}</h3>
        <p>{formatPrice(product.price)}</p>
        <small>{isSoldOut ? 'Sin stock por ahora' : `${product.stock} disponibles`}</small>
        <button className="card-button" type="button" disabled={isSoldOut} onClick={() => onSelect(product)}>
          {isSoldOut ? 'Agotado' : 'Elegir'}
        </button>
      </div>
    </article>
  );
}
