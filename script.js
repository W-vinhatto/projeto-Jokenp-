const testResult = document.querySelector("#result")
const testponctuationHuman = document.querySelector("#ponctuation-Human")
const testponctuationMachine = document.querySelector("#ponctuation-Machine")
const resultText = document.querySelector("#result-text")
let ponctuationHuman = 0
let ponctuationMachine = 0

function player(play) {
    playTheGame(play, machine())
}


const machine = () => {
    const choice = ['pedra', 'papel', 'tesoura']
    const nubRandon = Math.floor(Math.random() * 3)
    return choice[nubRandon]
}

const playTheGame = (player, machines) => {

    if (player === machines) {
        testResult.innerHTML = "&#x1F610;"
        resultText.innerHTML = "Deu empate"
    } else if (
        player === 'pedra' && machines === 'tesoura' || 
        player === 'papel' && machines === 'pedra' || 
        player === 'tesoura' && machines === 'papel') {
            ponctuationHuman++
            testResult.innerHTML = "&#x1F60D;"
            resultText.innerHTML = "Prabéns você venceu"
            testponctuationHuman.innerHTML = ponctuationHuman

    } else {
        testResult.innerHTML = "&#x1F622;"
        resultText.innerHTML = "Você perdeu para alexa"
        ponctuationMachine++
        testponctuationMachine.innerHTML = ponctuationMachine
    }
}