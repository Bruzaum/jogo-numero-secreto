const menorValor = 0
const maiorValor = 1000

const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    const random = Math.random() * maiorValor + 1
    console.log(parseInt(random))
    return parseInt(random)
}

const e_menor = document.getElementById('menor-valor')
e_menor.innerHTML = menorValor

const e_maior = document.getElementById('maior-valor')
e_maior.innerHTML = maiorValor