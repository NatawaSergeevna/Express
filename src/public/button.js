calculation();
function addProduct(id) {
    const product = JSON.parse(document.getElementById(id).getAttribute('product-data'));
    fetch('http://127.0.0.1:3000/products/', {method: "POST", body: JSON.stringify(product), headers: {'Content-Type': 'application/json'}})
    .then(res => res.json())
    .then(data => console.log(data));

    const btn = document.getElementById(id).querySelector('button');
    btn.innerHTML = 'В корзине';
    btn.classList.add('buy');
    calculation();
}

function crossClose(id) { 
    const product = JSON.parse(document.getElementById(id).getAttribute('product-data'));
    fetch('http://127.0.0.1:3000/products/delete', {method: "DELETE", body: JSON.stringify(product), headers: {'Content-Type': 'application/json'}});

    document.getElementById(id).remove();
    const btn = document.getElementById(id).querySelector('button');
    btn.innerHTML = 'Купить';
    btn.classList.remove('buy');
    calculation();
}

