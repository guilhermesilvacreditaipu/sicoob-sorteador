function sortearNumeros() {
    var quantity = document.getElementById('quantity').value;
    var min = document.getElementById('min').value;
    var max = document.getElementById('max').value;

    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    for (var i = 0; i < quantity; i++) {
        var numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
        resultContainer.innerHTML += '<span class="numero-sorteado">' + numeroSorteado + '</span> ';
    }
}
