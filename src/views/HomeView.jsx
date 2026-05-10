import { CheckoutFlow } from '../components/CheckoutFlow';
import { CollectionStrip } from '../components/CollectionStrip';
import { Features } from '../components/Features';
import { Hero } from '../components/Hero';
import { ProductCatalog } from '../components/ProductCatalog';
import { Promo } from '../components/Promo';

export function HomeView({ shop }) {
  return (
    <>
      <Hero />
      <CollectionStrip collections={shop.collections} />
      <ProductCatalog
        products={shop.filteredProducts}
        categories={shop.categories}
        selectedProduct={shop.selectedProduct}
        selectedCategory={shop.selectedCategory}
        searchTerm={shop.searchTerm}
        availability={shop.availability}
        resultCount={shop.filteredProducts.length}
        onSelectProduct={shop.selectProduct}
        onCategoryChange={shop.setSelectedCategory}
        onSearchChange={shop.setSearchTerm}
        onAvailabilityChange={shop.setAvailability}
      />
      <CheckoutFlow
        product={shop.selectedProduct}
        selectedSize={shop.selectedSize}
        selectedColor={shop.selectedColor}
        quantity={shop.quantity}
        orderStatus={shop.orderStatus}
        onSizeChange={shop.setSelectedSize}
        onColorChange={shop.setSelectedColor}
        onQuantityChange={shop.setQuantity}
        onAddToCart={shop.addToCart}
        onViewCart={() => shop.navigate('cart')}
      />
      <Promo />
      <Features />
    </>
  );
}
