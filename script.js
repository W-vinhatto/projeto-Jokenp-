const testResult = document.querySelector("#result")
const testponctuationHuman = document.querySelector("#ponctuation-Human")
const testponctuationMachine = document.querySelector("#ponctuation-Machine")
const resultText = document.querySelector("#result-text")
let ponctuationHuman = 0
let ponctuationMachine = 0   // camel case
const GAME_OPTIONS = {       // snake case
    STONE : "pedra",
    PAPER: "papel",
    SCISSORS: "tesoura"
}

function player(play) {
    playTheGame(play, machine())
}


const machine = () => {
    const choice = [GAME_OPTIONS.STONE,GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const nubRandon = Math.floor(Math.random() * 3)
    return choice[nubRandon]
}

const playTheGame = (player, machines) => {

    if (player === machines) {
        testResult.innerHTML = "&#x1F610;"
        resultText.innerHTML = "Deu empate"
    } else if (
        player === GAME_OPTIONS.STONE && machines === GAME_OPTIONS.SCISSORS || 
        player === GAME_OPTIONS.PAPER && machines === GAME_OPTIONS.STONE || 
        player === GAME_OPTIONS.SCISSORS && machines === GAME_OPTIONS.PAPER) {
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