var numerosSorteados = []; // Array para armazenar os números já sorteados

function sortearNumeros() {
    var quantity = document.getElementById('quantity').value;
    var min = document.getElementById('min').value;
    var max = document.getElementById('max').value;

    // Limpa o array de números sorteados
    numerosSorteados = [];

    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';

    for (var i = 0; i < quantity; i++) {
        var numeroSorteado;
        do {
            numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
        } while (numerosSorteados.includes(numeroSorteado));

        numerosSorteados.push(numeroSorteado);

        var numeroFormatado = padLeft(numeroSorteado, max.toString().length);
        resultContainer.innerHTML += '<span class="numero-sorteado">' + numeroFormatado + '</span> ';
    }
}

// Função para preencher zeros à esquerda até atingir o comprimento desejado
function padLeft(number, length) {
    return number.toString().padStart(length, '0');
}
