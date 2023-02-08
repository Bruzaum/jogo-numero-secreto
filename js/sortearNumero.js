const menorValor = 0
const maiorValor = 1000

const numeroSecreto = gerarNumeroAleatorio()


function gerarNumeroAleatorio() {
    const random = Math.random() * maiorValor + 1
    console.log(parseInt(random))
    return parseInt(random)
}

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor