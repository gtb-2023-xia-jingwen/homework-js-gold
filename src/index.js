// 从json-server 获取数据
// 根据数据修改页面
import placeholderImg from './assets/placeholder-image.png';

function fetchProducts() {
  return fetch('http://localhost:3000/products').then((res) => res.json());
}

function renderProducts(products) {
  const htmlList = products.map((product) => {
    return `<li id="product${product.id}">
                <img src="${placeholderImg}" alt="placeholderImg">
                <h2>${product.name}</h2>
                <p>价格：${product.price} / ${product.unit}</p>
                <button class="delete-btn" data-id="${product.id}">删除</button>
            </li>`;
  });

  document.querySelector('.products').innerHTML = htmlList.join('');
}

fetchProducts().then((data) => {
  renderProducts(data);
});

// 删除商品
// 1. 添加删除按钮
// 2. 给删除按钮绑定click事件处理函数
// 3. 声明事件处理函数：
//    1. 向 json-server 发送 delete request
//    2. 删除页面上的商品元素

const deleteProduct = (id) =>
  fetch(`http://localhost:3000/products/${id}`, {
    method: 'DELETE',
  }).then((res) => res.json());

function removeProductItem(id) {
  document.querySelector(`#product${id}`).remove();
}

document.addEventListener('click', (event) => {
  if (event.target.matches('.delete-btn')) {
    const { id } = event.target.dataset;
    deleteProduct(id).then(() => {
      removeProductItem(id);
    });
  }
});
