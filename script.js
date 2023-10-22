const testResult = document.querySelector("#result")
const testponctuationHuman = document.querySelector("#ponctuation-Human")
const testponctuationMachine = document.querySelector("#ponctuation-Machine")
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
    } else if (
        player === 'pedra' && machines === 'tesoura' || 
        player === 'papel' && machines === 'pedra' || 
        player === 'tesoura' && machines === 'papel') {
            ponctuationHuman++
            testResult.innerHTML = "&#x1F60D;"
            testponctuationHuman.innerHTML = ponctuationHuman

    } else {
        testResult.innerHTML = "&#x1F622;"
        ponctuationMachine++
        testponctuationMachine.innerHTML = ponctuationMachine
    }
}