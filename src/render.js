import placeholderImg from './assets/placeholder-image.png';

export function renderProducts(products) {
  const htmlList = products.map(
    ({ id, name, price, unit }) =>
      `<li id="product${id}">
                <img src="${placeholderImg}" alt="placeholderImg">
                <h2>${name}</h2>
                <p>价格：${price} / ${unit}</p>
                <button class="delete-btn" data-id="${id}">删除</button>
            </li>`
  );

  const productList = document.querySelector('.products');
  productList.innerHTML = htmlList.join('');
}

export function removeProductItem(id) {
  document.querySelector(`#product${id}`).remove();
}
