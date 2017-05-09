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

window.onload = playGame