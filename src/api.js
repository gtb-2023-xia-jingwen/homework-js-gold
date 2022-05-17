const PRODUCTS_API = `http://localhost:3000/products`;

export const fetchProducts = () =>
  fetch(PRODUCTS_API).then((res) => res.json());

export const deleteProduct = (id) =>
  fetch(`${PRODUCTS_API}/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json());
