// contador de precio

let contador = 1;
const precio = 500.00;
const stock = 10;

// capturar elementos
const sumar = document.querySelector("#sumar");
const restar = document.querySelector("#restar");
const cantidad = document.querySelector("#cantidad");
const total = document.querySelector("#total");

// declarar funcion

function sumarfunction() {
    if (contador < stock) {
        contador++;
        renderHTML();

    } else {
        alert("no puedes comprar mas de " + stock + " productos")
    }
}

function restarFunction() {
    if (contador > 1) {
        contador--;
        renderHTML();
    } else {
        alert("no puedes comprar menos de un un producto")
    }
}

function renderHTML() {
    cantidad.innerHTML = contador;
    total.innerHTML = `$ ${contador * precio}`;
}

sumar.addEventListener("click", sumarfunction);
restar.addEventListener("click", restarFunction);
renderHTML();


