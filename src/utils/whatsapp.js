import { formatPrice } from './format';

export function buildWhatsAppOrderUrl({ cart, customer, subtotal, delivery, total, phoneNumber }) {
  const lines = cart.map(
    (item, index) =>
      `${index + 1}. ${item.name} | Talla: ${item.size} | Color: ${item.color} | Cantidad: ${item.quantity} | ${formatPrice(item.price * item.quantity)}`,
  );

  const message = [
    'Hola MelenaShop, quiero hacer este pedido:',
    '',
    'Datos del cliente:',
    `Nombre: ${customer.name}`,
    `Celular: ${customer.phone}`,
    `Ciudad / distrito: ${customer.city}`,
    `Direccion / referencia: ${customer.address}`,
    '',
    'Detalle del pedido:',
    ...lines,
    '',
    `Subtotal: ${formatPrice(subtotal)}`,
    `Envio: ${delivery === 0 ? 'Gratis' : formatPrice(delivery)}`,
    `Total: ${formatPrice(total)}`,
    '',
    'Quedo atento para coordinar pago y entrega.',
  ].join('\n');

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
