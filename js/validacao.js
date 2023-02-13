function verificaChute(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        el_chute.innerHTML += '<div>Valor inválido</div>'
        return false
    }

    if (numeroForaDoLimite(numero)) {
        el_chute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return false
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar"><i class="fa-solid fa-rotate-left"></i></button> 
        `
    } else if (numero > numeroSecreto) {
        el_chute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        el_chute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

    return true
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForaDoLimite(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.parentNode.id == 'jogar-novamente')
        window.location.reload()
})