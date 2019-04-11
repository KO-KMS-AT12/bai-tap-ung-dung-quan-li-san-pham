let count = 0;
let products = ['Sam Sung', 'Apple', 'LG', 'Nokia'];
let valueProduct = document.getElementById("products");
let nameProduct = document.getElementById("txtProduct");
let countProduct = document.getElementById("countProduct");


function showProduct() {
    for (let i = 0; i < products.length; i++) {
        valueProduct.innerHTML +=
            '<tr>'
            + '<td>' + products[i] + '</td>'
            + '<td><input type="button" onclick="edit(' + i + ')" value="Edit"/></td>'
            + '<td><input type="button" onclick="del(' + i + ')" value="Delete"/></td>'
            + '</tr>';
        count++
    }
    countProduct.innerHTML = count;
}

function add() {
    refersh();
    products.push(nameProduct.value);
    showProduct();
}


function del(item) {
    refersh();
    products.splice(item, item + 1);
    showProduct();
}


function edit(item) {
    let editProduct = document.getElementById("editProduct");
    let btnSave = document.getElementById("btnSave");
    let btnCancel = document.getElementById("btnCancel");

    editProduct.placeholder = products[item];

    show(editProduct, btnSave, btnCancel);

    btnCancel.onclick = function () {
        hidden(editProduct, btnSave, btnCancel);
    };
    btnSave.onclick = function () {
        products[item] = editProduct.value;
        refersh();
        showProduct();
        hidden(editProduct, btnSave, btnCancel);
    };
}

function refersh() {
    valueProduct.innerHTML = '';
    count = 0;
}

function show(editProduct, btnSave, btnCancel) {
    editProduct.style.visibility = "visible";
    btnSave.style.visibility = "visible";
    btnCancel.style.visibility = "visible";
}

function hidden(editProduct, btnSave, btnCancel) {
    editProduct.style.visibility = "hidden";
    btnSave.style.visibility = "hidden";
    btnCancel.style.visibility = "hidden";
}
