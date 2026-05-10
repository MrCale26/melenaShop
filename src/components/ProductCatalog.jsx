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
        <p className="eyebrow">Favoritos</p>
        <h2>Catalogo MelenaShop</h2>
        <p className="catalog-count">{resultCount} productos encontrados</p>
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
