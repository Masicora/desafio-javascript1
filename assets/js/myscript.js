

function calcular() {
    document.querySelector('#totalPrecio').innerHTML = Number(document.querySelector('#cantidad').value) * 400000;
    document.querySelector('#totalCantidad').innerHTML = document.querySelector('#cantidad').value;
    document.querySelector('#totalColor').style.backgroundColor = document.querySelector('#color').value;
}
