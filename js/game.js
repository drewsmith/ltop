require('../css/game.css');

//canvas variables
var canvas = document.getElementById('game-canvas');
var ctx = canvas.getContext('2d');

var pizzaSlice = new Image();
pizzaSlice.src = 'assets/slicesprite.jpg';

var towerImage = new Image();
towerImage.src = 'assets/towersprite.png';

var sky = new Image();
sky.src = 'assets/sky.png';

var platform = new Image();
platform.src = 'assets/platform.png';

var oliveImg = new Image();
oliveImg.src = 'assets/olive.png';

var wholePizza = new Image();
wholePizza.src = 'assets/wholepizza.png';

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

class Topping {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.width = 0;
        this.height = 0;
        this.points = 0;
        this.speeds = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6];
    }
    reset() {
        this.x = Math.random() * (canvas.width - this.width);
        this.y = 15 + Math.random() * 30;
        let randomSpeed = this.speeds[Math.floor(Math.random() * this.speeds.length)];
        this.speed = randomSpeed + Math.random();
    }
    checkCollision(other) {
        if (this.isColliding(this, tower)) {
            score += this.points;
            this.reset();
        }

        this.y += this.speed;
        if (this.y > canvas.height) {
            this.reset();
        }
    }
    isColliding(a, b) {
        return !(b.x > a.x + a.width || b.x + b.width < a.x || b.y > a.y + a.height || b.y + b.height < a.y);
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

class Slice extends Topping {
    constructor() {
        super();
        this.width = 30;
        this.height = 30;
        this.points = 5;
        this.img = pizzaSlice;
        this.reset();
    }
}

class Olive extends Topping {
    constructor() {
        super();
        this.width = 20;
        this.height = 20;
        this.points = -5;
        this.img = oliveImg;
        this.reset();
    }
}

class Pizza extends Topping {
    constructor() {
        super();
        this.width = 50;
        this.height = 30;
        this.points = 25;
        this.img = wholePizza;
        this.reset();
    }
}

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

    slices.forEach(slice => slice.checkCollision(tower));
    olives.forEach(olive => olive.checkCollision(tower));
    pizzas.forEach(pizza => pizza.checkCollision(tower));

    drawAll();
}

function drawAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(sky, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(platform, 0, (canvas.height - 20), canvas.width, 20);
    ctx.drawImage(towerImage, tower.x, tower.y, tower.width, tower.height);

    slices.forEach(slice => slice.draw());
    olives.forEach(olive => olive.draw());
    pizzas.forEach(pizza => pizza.draw());

    ctx.font = "bold 12px 'Press Start 2P'";
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + score, 10, 20);
}

(function startGame() {
    slices = Array.from(new Array(10), () => new Slice());
    olives = Array.from(new Array(10), () => new Olive());
    pizzas = Array.from(new Array(3), () => new Pizza());
    canvas.focus();
    animate();
})();