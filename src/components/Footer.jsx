import { STORE_WHATSAPP_NUMBER } from '../config/store';

export function Footer() {
  const whatsappUrl = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hola MelenaShop, quiero consultar por zapatillas.',
  )}`;

  return (
    <footer id="contacto" className="footer">
      <div>
        <p className="eyebrow">Compra directa</p>
        <h2>Haz tu pedido hoy</h2>
        <p>
          Escribenos por WhatsApp o Instagram y recibe asesoria para elegir
          tu combo MelenaShop.
        </p>
      </div>
      <div className="footer-actions">
        <a className="primary-button" href={whatsappUrl}>
          WhatsApp
        </a>
        <a className="ghost-button" href="https://instagram.com/">
          Instagram
        </a>
      </div>
    </footer>
  );
}
