require('../less/game.less')

import Game from './Game'

const canvas = document.getElementById('game-canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight - 150

let game = new Game(canvas);

const playGame = () => {
    if (game.isAlive()) {
        requestAnimationFrame(playGame)
    } else {
        canvas.addEventListener('click', newGame)
    }

    game.requestFrame()
}

const newGame = () => {
    canvas.removeEventListener('click', newGame)
    game = new Game(canvas)
    playGame()
}

const instructions = document.getElementById('instructions')
const startGameButton = document.getElementById('start-game-btn')
const startGameWrapper = document.getElementById('start-game-wrapper')

startGameButton.addEventListener('click', (e) => {
    instructions.style.display = 'block'
    startGameWrapper.remove()
    playGame()
})