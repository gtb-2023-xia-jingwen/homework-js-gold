// 从json-server 获取数据
// 根据数据修改页面

function fetchProducts() {
  return fetch('http://localhost:3000/products').then((res) => res.json());
}

function renderProducts(products) {
  const htmlList = products.map((product) => {
    return `<li>${product.name}</li>`;
  });

  document.querySelector('.products').innerHTML = htmlList.join('');
}

fetchProducts().then((data) => {
  renderProducts(data);
});
