import { useMemo, useState } from 'react';
import { STORE_WHATSAPP_NUMBER } from '../config/store';
import { collections, products } from '../data/products';
import { buildWhatsAppOrderUrl } from '../utils/whatsapp';

export function useShop() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [availability, setAvailability] = useState('all');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [orderStatus, setOrderStatus] = useState('');

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart],
  );
  const delivery = subtotal >= 220 || subtotal === 0 ? 0 : 12;
  const total = subtotal + delivery;
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const categories = useMemo(() => ['Todos', ...collections], []);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'Todos' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch);
      const matchesAvailability =
        availability === 'all' ||
        (availability === 'available' && product.status === 'available' && product.stock > 0) ||
        (availability === 'sold-out' && (product.status === 'sold-out' || product.stock === 0));

      return matchesCategory && matchesSearch && matchesAvailability;
    });
  }, [availability, searchTerm, selectedCategory]);

  function navigate(view) {
    setCurrentView(view);
    setOrderStatus('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function selectProduct(product) {
    if (product.status === 'sold-out' || product.stock === 0) {
      setOrderStatus(`${product.name} esta agotado por ahora.`);
      return;
    }

    setSelectedProduct(product);
    setSelectedSize('');
    setSelectedColor('');
    setQuantity(1);
    setOrderStatus('');
    document.getElementById('armar-pedido')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function addToCart() {
    if (!selectedSize || !selectedColor) return;
    if (selectedProduct.status === 'sold-out' || selectedProduct.stock === 0) {
      setOrderStatus(`${selectedProduct.name} esta agotado por ahora.`);
      return;
    }

    const lineId = `${selectedProduct.id}-${selectedSize}-${selectedColor}`;

    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.lineId === lineId);

      if (existingItem) {
        return currentCart.map((item) =>
          item.lineId === lineId
            ? { ...item, quantity: Math.min(selectedProduct.stock, item.quantity + quantity) }
            : item,
        );
      }

      return [
        ...currentCart,
        {
          lineId,
          id: selectedProduct.id,
          name: selectedProduct.name,
          image: selectedProduct.image,
          price: selectedProduct.price,
          size: selectedSize,
          color: selectedColor,
          quantity,
        },
      ];
    });

    setOrderStatus(`${selectedProduct.name} agregado al carrito.`);
  }

  function removeFromCart(lineId) {
    setCart((currentCart) => currentCart.filter((item) => item.lineId !== lineId));
    setOrderStatus('');
  }

  function checkoutByWhatsApp() {
    if (cart.length === 0) return;

    const url = buildWhatsAppOrderUrl({
      cart,
      subtotal,
      delivery,
      total,
      phoneNumber: STORE_WHATSAPP_NUMBER,
    });

    window.open(url, '_blank', 'noopener,noreferrer');
    setOrderStatus('Pedido enviado a WhatsApp. Coordina pago y entrega con MelenaShop.');
  }

  return {
    availability,
    cart,
    cartCount,
    categories,
    collections,
    currentView,
    delivery,
    filteredProducts,
    orderStatus,
    quantity,
    searchTerm,
    selectedCategory,
    selectedColor,
    selectedProduct,
    selectedSize,
    subtotal,
    total,
    addToCart,
    checkoutByWhatsApp,
    navigate,
    removeFromCart,
    selectProduct,
    setAvailability,
    setQuantity,
    setSearchTerm,
    setSelectedCategory,
    setSelectedColor,
    setSelectedSize,
  };
}
