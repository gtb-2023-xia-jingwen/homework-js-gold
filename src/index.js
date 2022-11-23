import placeholderImg from "./assets/placeholder-image.png"

const URL = "http://localhost:3000/products";

// 获取商品信息
res = fetch(URL).then((request)=>request.json());

// 渲染页面
res.then((datas)=>{
    let n = datas.length;
    htmlTxt = ""
    for(let i = 0; i < n; i++) {
        let p = datas[i];
        htmlTxt += `
            <li id=${p["id"]}>
                <img src="${placeholderImg}"/>
                <h3>${p["name"]}</h3>
                <div>
                    <h4>单价：${p["price"]}/${p["unit"]}</h4>
                    <button style="display:none">删除</button>
                </div>
            </li>
        `;
    }
    ul = document.querySelector(".products");
    ul.innerHTML = htmlTxt;
});

// 显示删除按钮
ul = document.querySelector(".products");
ul.addEventListener("mouseover", e => toggleBtn(e, true));
ul.addEventListener("mouseout", e => toggleBtn(e, false));
function toggleBtn(e, turnOn){
    console.log(e);
    let target = e.target;
    tagName = target.tagName;
    let btn = null; 
    if (tagName == "LI" || tagName == "DIV") {
        btn = target.querySelector('button');
    }
    else if (tagName == "IMG" || tagName == "H3") {
        btn = target.parentNode.querySelector('button');
    }
    else if (tagName == "H4") {
        btn = target.parentNode.querySelector('button');
    }
    if(btn == null) return;
    if(turnOn) {
        btn.setAttribute("style", "display:block");
    }else {
        btn.setAttribute("style", "display:none");
    }
}