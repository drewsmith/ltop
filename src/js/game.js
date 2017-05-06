require('../css/game.css')

import Pizza from './Pizza'
import Olive from './Olive'
import Slice from './Slice'

const skyImg = new Image();
skyImg.src = require('../img/sky.png');

const platformImg = new Image();
platformImg.src = require('../img/platform.png');

const towerImg = new Image();
towerImg.src = require('../img/towersprite.png');

//canvas variables
var canvas = document.getElementById('game-canvas');
var ctx = canvas.getContext('2d');

var continueAnimating = true;
var score = 0;

var tower = {
    x: 0,
    height: 160,
    width: 50,
    y: canvas.height - 160,
    towerSpeed: 10
}

var slices = [];
var olives = [];
var pizzas = [];

document.onkeydown = function(event) {
    if (event.keyCode == 39) {
        tower.x += tower.towerSpeed;
        if (tower.x >= (canvas.width - tower.width)) {
            tower.x = (canvas.width - tower.width);
        }
        //if (tower.x >= canvas.width - tower.width) {
        //    continueAnimating = false;
        //    alert("Completed with a score of " + score);
        //}
    } else if (event.keyCode == 37) {
        tower.x -= tower.towerSpeed;
        if (tower.x <= 0) {
            tower.x = 0;
        }
    } else if (event.keyCode == 80) {
        continueAnimating = false;
    } else if (event.keyCode == 83) {
        continueAnimating = true;
        animate();
    }
}

function animate() {
    if (continueAnimating) {
        requestAnimationFrame(animate);
    }

    slices.forEach(slice => slice.checkCollision(tower, canvas));
    olives.forEach(olive => olive.checkCollision(tower, canvas));
    pizzas.forEach(pizza => pizza.checkCollision(tower, canvas));

    drawAll();
}

function drawAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(skyImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(platformImg, 0, (canvas.height - 20), canvas.width, 20);
    ctx.drawImage(towerImg, tower.x, tower.y, tower.width, tower.height);

    slices.forEach(slice => slice.draw(ctx));
    olives.forEach(olive => olive.draw(ctx));
    pizzas.forEach(pizza => pizza.draw(ctx));

    ctx.font = "bold 12px 'Press Start 2P'";
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + score, 10, 20);
}

(function startGame() {
    slices = Array.from(new Array(10), () => new Slice());
    slices.forEach((slice) => slice.setPosition(canvas));

    olives = Array.from(new Array(10), () => new Olive());
    olives.forEach((olive) => olive.setPosition(canvas));

    pizzas = Array.from(new Array(3), () => new Pizza());
    pizzas.forEach((pizza) => pizza.setPosition(canvas));

    canvas.focus();
    animate();
})();