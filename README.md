# MelenaShop

Landing page para una tienda de ropa urbana creada con React y Vite.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre `http://127.0.0.1:5173`.

## Crear version de produccion

```bash
npm run build
```

## Agregar o editar productos

Los productos se editan por categoria dentro de `src/data/products/`.

Archivos actuales:

```txt
src/data/products/zapatillas.js
src/data/products/poleras.js
src/data/products/casacas.js
src/data/products/joggers.js
src/data/products/gorras.js
```

El archivo `src/data/products/index.js` junta todas las categorias para que la tienda las lea automaticamente.

Ejemplo:

```js
{
  id: 'zapatilla-nueva',
  name: 'Zapatilla nueva',
  category: 'Zapatillas',
  tag: 'Nuevo',
  status: 'available',
  stock: 10,
  price: 159,
  image: 'https://...',
  sizes: ['38', '39', '40', '41'],
  colors: ['Negro', 'Rojo'],
  description: 'Descripcion corta del producto.',
}
```

Para marcar un producto como agotado:

```js
status: 'sold-out',
stock: 0,
```

Para volverlo disponible:

```js
status: 'available',
stock: 5,
```

## Cambiar numero de WhatsApp

El numero que recibe los pedidos esta en `src/config/store.js`.

```js
export const STORE_WHATSAPP_NUMBER = '51999999999';
```

Usa el formato internacional, sin `+`, espacios ni guiones.

## Publicar en GitHub Pages

Este proyecto incluye un workflow en `.github/workflows/deploy.yml`.

1. Sube el proyecto a un repositorio llamado `melenaShop`.
2. En GitHub, entra a `Settings > Pages`.
3. En `Build and deployment`, elige `GitHub Actions`.
4. Haz push a la rama `main`.

GitHub publicara la landing automaticamente.
