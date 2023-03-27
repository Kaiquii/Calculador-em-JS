function somar() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var resultado = valor1 + valor2;
    document.getElementById("resultado").value = resultado;
}

function subtrair() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var resultado = valor1 - valor2;
    document.getElementById("resultado").value = resultado;
}

function multiplicar() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var resultado = valor1 * valor2;
    document.getElementById("resultado").value = resultado;
}

function dividir() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var resultado = valor1 / valor2;
    document.getElementById("resultado").value = resultado;
}