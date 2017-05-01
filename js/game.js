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

var continueAnimating = true;
var score = 0;

// tower variables
var towerWidth = 50;
var towerHeight = 160;
var towerSpeed = 10;

var tower = {
    x: 0,
    y: canvas.height - towerHeight,
    width: towerWidth,
    height: towerHeight,
    towerSpeed: towerSpeed
}

// slice variables
var sliceWidth = 30;
var sliceHeight = 30;
var totalslices = 10;

var slices = [];
var speeds = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6];

for (var i = 0; i < totalslices; i++) {
    addslice();
}

function addslice() {
    var slice = {
        width: sliceWidth,
        height: sliceHeight,
        points: 5
    }
    resetslice(slice);
    slices.push(slice);
}

function resetslice(slice) {
    slice.x = Math.random() * (canvas.width - sliceWidth);
    slice.y = 15 + Math.random() * 30;
    var randomSpeed = speeds[Math.floor(Math.random() * speeds.length)];
    slice.speed = randomSpeed + Math.random();
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
    }
}


function animate() {
    if (continueAnimating) {
        requestAnimationFrame(animate);
    }

    slices.forEach(function(slice) {
        if (isColliding(slice, tower)) {
            score += slice.points;
            resetslice(slice);
        }

        slice.y += slice.speed;
        if (slice.y > canvas.height) {
            resetslice(slice);
        }
    });

    drawAll();
}

function isColliding(a, b) {
    return !(b.x > a.x + a.width || b.x + b.width < a.x || b.y > a.y + a.height || b.y + b.height < a.y);
}

function drawAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(sky, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(platform, 0, (canvas.height - 20), canvas.width, 20);
    ctx.drawImage(towerImage, tower.x, tower.y, tower.width, tower.height);

    slices.forEach(function(slice) {
        ctx.drawImage(pizzaSlice, slice.x, slice.y, slice.width, slice.height);
    });

    ctx.font = "bold 12px 'Press Start 2P'";
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + score, 10, 20);
}

(function startGame() {
    slices.forEach(resetslice);
    animate();

})();