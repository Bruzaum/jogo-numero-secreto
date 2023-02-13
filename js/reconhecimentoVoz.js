const el_chute = document.getElementById('chute')
const el_menor = document.getElementById('menor-valor')
const el_maior = document.getElementById('maior-valor')
let recognition

window.onload = function() {
    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

    recognition = new SpeechRecognition()
    recognition.lang = 'pt-Br'
    recognition.start()
    recognition.addEventListener('result', onSpeak)
    recognition.addEventListener('end', () => recognition.start())
}

function onSpeak(e) {
    const input = e.results[0][0].transcript
    const chute = normalizeInput(input)

    exibeChuteNaTela(chute)
    const valido = verificaChute(chute)
    if (valido) atualizaIntervaloNaTela(chute)
}

function exibeChuteNaTela(chute) {
    el_chute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}</span>
     `
}

function normalizeInput(input) {
    const units = {
        "um": 1,
        "dois": 2,
        "três": 3,
        "quatro": 4,
        "cinco": 5,
        "seis": 6,
        "sete": 7,
        "oito": 8,
        "nove": 9 
    }
    
    let chute = removeLastChar(input)
    const getunit = units[chute.toLowerCase()]
    if (getunit) chute = getunit

    return chute
}

function removeLastChar(string) {
    return string.substring(0, string.length-1)
}

function atualizaIntervaloNaTela(chute) {
    const menor = parseInt(el_menor.innerHTML)
    const maior = parseInt(el_maior.innerHTML)

    if (chute < numeroSecreto && chute > menor) el_menor.innerHTML = +chute +1
    if (chute > numeroSecreto && chute < maior) el_maior.innerHTML = +chute -1
}