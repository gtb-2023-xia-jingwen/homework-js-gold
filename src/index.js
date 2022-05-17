// 从json-server 获取数据
// 根据数据修改页面
import placeholderImg from './assets/placeholder-image.png';

function fetchProducts() {
  return fetch('http://localhost:3000/products').then((res) => res.json());
}

function renderProducts(products) {
  const htmlList = products.map((product) => {
    return `<li>
                <img src="${placeholderImg}" alt="placeholderImg">
                <h2>${product.name}</h2>
                <p>价格：${product.price} / ${product.unit}</p>
            </li>`;
  });

  document.querySelector('.products').innerHTML = htmlList.join('');
}

fetchProducts().then((data) => {
  renderProducts(data);
});
