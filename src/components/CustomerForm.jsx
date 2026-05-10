export function CustomerForm({ customer, onCustomerChange }) {
  function updateField(field, value) {
    onCustomerChange({
      ...customer,
      [field]: value,
    });
  }

  return (
    <section className="customer-form" aria-label="Datos del cliente">
      <div>
        <p className="eyebrow">Datos de entrega</p>
        <h2>Completa tu informacion</h2>
        <p>
          Estos datos se enviaran junto con el pedido para coordinar entrega por
          WhatsApp.
        </p>
      </div>

      <div className="customer-grid">
        <label>
          <span>Nombre completo</span>
          <input
            value={customer.name}
            onChange={(event) => updateField('name', event.target.value)}
            placeholder="Ej. Carlos Mendoza"
          />
        </label>
        <label>
          <span>Celular de contacto</span>
          <input
            value={customer.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            placeholder="Ej. 999 999 999"
          />
        </label>
        <label>
          <span>Ciudad / distrito</span>
          <input
            value={customer.city}
            onChange={(event) => updateField('city', event.target.value)}
            placeholder="Ej. Lima, Los Olivos"
          />
        </label>
        <label>
          <span>Direccion o referencia</span>
          <textarea
            value={customer.address}
            onChange={(event) => updateField('address', event.target.value)}
            placeholder="Calle, numero, referencia o punto de entrega"
            rows="4"
          />
        </label>
      </div>
    </section>
  );
}
