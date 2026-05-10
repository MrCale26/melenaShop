import { ProductCard } from './ProductCard';
import { CatalogFilters } from './CatalogFilters';

export function ProductCatalog({
  products,
  categories,
  selectedProduct,
  selectedCategory,
  searchTerm,
  availability,
  resultCount,
  onSelectProduct,
  onCategoryChange,
  onSearchChange,
  onAvailabilityChange,
}) {
  return (
    <section id="productos" className="products">
      <div className="section-heading">
        <p className="eyebrow">Catalogo</p>
        <h2>Catalogo MelenaShop</h2>
        <p className="catalog-count">
          Filtra, revisa disponibilidad y elige una zapatilla para armar tu pedido.
          <strong>{resultCount} productos encontrados</strong>
        </p>
      </div>

      <CatalogFilters
        categories={categories}
        selectedCategory={selectedCategory}
        searchTerm={searchTerm}
        availability={availability}
        onCategoryChange={onCategoryChange}
        onSearchChange={onSearchChange}
        onAvailabilityChange={onAvailabilityChange}
      />

      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isSelected={selectedProduct.id === product.id}
              onSelect={onSelectProduct}
            />
          ))
        ) : (
          <div className="empty-results">
            No encontramos productos con esos filtros.
          </div>
        )}
      </div>
    </section>
  );
}
