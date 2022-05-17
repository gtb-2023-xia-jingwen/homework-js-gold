import { deleteProduct, fetchProducts } from './api';
import { removeProductItem, renderProducts } from './render';

fetchProducts().then((data) => {
  renderProducts(data);
});

document.addEventListener('click', deleteHandler);

function deleteHandler(event) {
  if (event.target.matches('.delete-btn')) {
    const { id } = event.target.dataset;
    deleteProduct(id).then(() => {
      removeProductItem(id);
    });
  }
}
