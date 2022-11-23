import placeholderImg from "./assets/placeholder-image.png"

const URL = "http://localhost:3000/products"

// 获取商品信息
res = fetch(URL).then((request)=>request.json());

// 渲染页面
res.then((datas)=>{
    let n = datas.length;
    htmlTxt = ""
    for(let i = 0; i < n; i++) {
        let p = datas[i];
        htmlTxt += `
            <li>
                <img src="${placeholderImg}"/>
                <h3>${p["name"]}</h3>
                <h4>单价：${p["price"]}/${p["unit"]}</h4>
            </li>
        `;
    }
    ul = document.querySelector(".products");
    ul.innerHTML = htmlTxt;
});