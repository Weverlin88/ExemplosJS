
function add() {
    
    const inputValor = document.getElementById("inputValor");
    const valor = inputValor.value;

    
    const listaValores = document.getElementById("valores");
    const novoItem = document.createElement("li");
    novoItem.textContent = valor;
    listaValores.appendChild(novoItem);

    
    inputValor.value = "";
}


function ordenar() {
    const algoritmo = document.getElementById("algoritmo").value;
    const listaValores = document.getElementById("valores");
    const valores = Array.from(listaValores.children).map(li => parseFloat(li.textContent));

    if (algoritmo === "bubble") {
        
    } else if (algoritmo === "selection") {
        
    } else if (algoritmo === "quick") {
        
    }

    
}


function misturar() {
}


document.getElementById("btnAdicionar").addEventListener("click", add);
document.getElementById("btnOrdenar").addEventListener("click", ordenar);
document.getElementById("btnMisturar").addEventListener("click", misturar);
