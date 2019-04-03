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
            + '<td><input type="button" onclick="editProduct(' + i + ')" value="Edit"/></td>'
            + '<td><input type="button" onclick="delProduct(' + i + ')"value="Delete"/></td>'
            + '</tr>';
        count++
    }
    countProduct.innerHTML = count;
}

function addProduct() {
    refersh();
    products.push(nameProduct.value);
    showProduct();
}


function delProduct(item) {
    refersh();
    products.splice(item, item + 1);
    showProduct();

}

function editProduct(item) {

}

function refersh() {
    valueProduct.innerHTML = '';
    count = 0;
}

