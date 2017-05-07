require('../css/game.css')

import Game from './Game'

const game = new Game(document.getElementById('game-canvas'));

const playGame = () => {
    if (game.isAlive()) {
        requestAnimationFrame(playGame)
    }
    game.requestFrame()
}

window.onload = playGame