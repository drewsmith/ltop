require('../css/game.css')

import Game from './Game'

const canvas = document.getElementById('game-canvas');

const game = new Game(canvas);
game.init()

const playGame = () => {
    requestAnimationFrame(playGame)
    game.requestFrame()
}

window.onload = playGame