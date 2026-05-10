export function CatalogFilters({
  categories,
  selectedCategory,
  searchTerm,
  availability,
  onCategoryChange,
  onSearchChange,
  onAvailabilityChange,
}) {
  return (
    <div className="catalog-filters" aria-label="Filtros de productos">
      <label className="search-box">
        <span>Buscar</span>
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Zapatillas, polera, gorra..."
        />
      </label>

      <div className="filter-group">
        <span>Categoria</span>
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              className={selectedCategory === category ? 'filter-button active' : 'filter-button'}
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <label className="select-box">
        <span>Disponibilidad</span>
        <select value={availability} onChange={(event) => onAvailabilityChange(event.target.value)}>
          <option value="all">Todos</option>
          <option value="available">Disponibles</option>
          <option value="sold-out">Agotados</option>
        </select>
      </label>
    </div>
  );
}
