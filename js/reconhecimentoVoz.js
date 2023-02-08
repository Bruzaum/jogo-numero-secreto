const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript

    if (chute === "um") {
        chute = 1
    } else if (chute === "dois") {
        chute = 2
    } else if (chute === "três") {
        chute = 3
    } else if (chute === "quatro") {
        chute = 4
    } else if (chute === "cinco") {
        chute = 5
    } else if (chute === "seis") {
        chute = 6
    } else if (chute === "sete") {
        chute = 7
    } else if (chute === "oito") {
        chute = 8
    } else if (chute === "nove") {
        chute = 9
    }

    exibeChuteNaTela(chute)
    verificaChute(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
     `
} 

recognition.addEventListener('end', () => recognition.start())