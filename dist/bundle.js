/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/drew/Desktop/drewsmith.github.io/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
__webpack_require__(13);
__webpack_require__(12);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(14);
__webpack_require__(11);

var skyImg = exports.skyImg = new Image();
skyImg.src = 'dist/img/sky.png';

var platformImg = exports.platformImg = new Image();
platformImg.src = 'dist/img/platform.png';

var oliveImg = exports.oliveImg = new Image();
oliveImg.src = 'dist/img/olive.png';

var pizzaSliceImg = exports.pizzaSliceImg = new Image();
pizzaSliceImg.src = 'dist/img/slicesprite.jpg';

var pizzaImg = exports.pizzaImg = new Image();
pizzaImg.src = 'dist/img/wholepizza.png';

var towerImg = exports.towerImg = new Image();
towerImg.src = 'dist/img/towersprite.png';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(3);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enemy = function () {
    function Enemy() {
        var canvasWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var canvasHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Enemy);

        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.width = 0;
        this.height = 0;
        this.points = 0;
        this.img = null;
        this.maxWidth = canvasWidth;
        this.maxHeight = canvasHeight - 20;
        this.speeds = [0.3, 0.4, 0.5, 0.6, 0.7, 0.8];
    }

    _createClass(Enemy, [{
        key: 'setPosition',
        value: function setPosition() {
            this.x = Math.random() * (this.maxWidth - this.width);
            this.y = 15 + Math.random() * 30;
            var randomSpeed = this.speeds[Math.floor(Math.random() * this.speeds.length)];
            this.speed = randomSpeed + Math.random();
        }
    }, {
        key: 'move',
        value: function move() {
            this.y += this.speed;
            if (this.y > this.maxHeight) {
                this.setPosition();
            }
        }
    }, {
        key: 'draw',
        value: function draw(ctx) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }]);

    return Enemy;
}();

exports.default = Enemy;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Images = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tower = function () {
    function Tower() {
        var maxWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var maxHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Tower);

        this.maxHeight = maxHeight;
        this.height = 100;
        this.width = 50;
        this.y = maxHeight - this.height;
        this.x = 0;
        this.img = _Images.towerImg;
        this.speed = 10;
        this.maxWidth = maxWidth;
    }

    _createClass(Tower, [{
        key: 'draw',
        value: function draw(ctx) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }, {
        key: 'moveLeft',
        value: function moveLeft() {
            this.x += this.speed;
            if (this.x >= this.maxWidth - this.width) {
                this.x = this.maxWidth - this.width;
            }
        }
    }, {
        key: 'moveRight',
        value: function moveRight() {
            this.x -= this.speed;
            if (this.x <= 0) {
                this.x = 0;
            }
        }
    }]);

    return Tower;
}();

exports.default = Tower;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Utils = exports.Utils = {
    isColliding: function isColliding(firstObject, secondObject) {
        return !(secondObject.x > firstObject.x + firstObject.width || secondObject.x + secondObject.width < firstObject.x || secondObject.y > firstObject.y + firstObject.height || secondObject.y + secondObject.height < firstObject.y);
    },

    newImage: function newImage(path) {
        var img = new Image();
        img.src = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
        return img;
    }
};

var KeyCodes = exports.KeyCodes = {
    39: false,
    37: false,
    88: false, // X
    67: false, // C
    90: false };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Pizza = __webpack_require__(9);

var _Pizza2 = _interopRequireDefault(_Pizza);

var _Olive = __webpack_require__(8);

var _Olive2 = _interopRequireDefault(_Olive);

var _Slice = __webpack_require__(10);

var _Slice2 = _interopRequireDefault(_Slice);

var _Tower = __webpack_require__(2);

var _Tower2 = _interopRequireDefault(_Tower);

var _Laser = __webpack_require__(7);

var _Images = __webpack_require__(0);

var _Utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game(canvas) {
        _classCallCheck(this, Game);

        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.score = 0;
        this.aerials = [];
        this.lasers = [];
        this.maxLasers = 3;
        this.platform = {
            width: this.canvas.width,
            height: 20,
            x: 0,
            y: this.canvas.height - 20
        };
        this.damage = 0;
        this.alive = true;
        this.tower = new _Tower2.default(this.canvas.width, this.canvas.height);
        this.init();
    }

    _createClass(Game, [{
        key: 'requestFrame',
        value: function requestFrame() {
            this.moveAerials();
            this.moveLasers();
            this.draw();
        }
    }, {
        key: 'moveAerials',
        value: function moveAerials() {
            var _this = this;

            this.aerials.forEach(function (aerial) {
                if (_this.lasers.length > 0) {
                    _this.lasers.forEach(function (laser) {
                        if (_Utils.Utils.isColliding(aerial, laser)) {
                            aerial.setPosition();
                            _this.removeLaser(laser);
                            _this.score += 10;
                        }
                    });
                }
                if (_Utils.Utils.isColliding(aerial, _this.tower)) {
                    _this.damage += 1;
                    _this.alive = _this.damage < 10;
                    aerial.setPosition();
                } else {
                    aerial.move();
                }
            });
        }
    }, {
        key: 'moveLasers',
        value: function moveLasers() {
            var _this2 = this;

            this.lasers.forEach(function (laser) {
                laser.move(function () {
                    return _this2.removeLaser(laser);
                });
            });
        }
    }, {
        key: 'removeLaser',
        value: function removeLaser(laser) {
            this.lasers.splice(this.lasers.indexOf(laser), 1);
        }
    }, {
        key: 'clearCanvas',
        value: function clearCanvas() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }, {
        key: 'drawScore',
        value: function drawScore() {
            this.context.font = "bold 12px 'Press Start 2P'";
            this.context.fillStyle = 'black';
            this.context.fillText('Score: ' + this.score, 10, 20);
        }
    }, {
        key: 'formatDamage',
        value: function formatDamage() {
            return this.damage >= 10 ? '0%' : 10 - this.damage + '0%';
        }
    }, {
        key: 'drawDamage',
        value: function drawDamage() {
            this.context.font = "bold 12px 'Press Start 2P'";
            if (this.damage < 4) {
                this.context.fillStyle = 'green';
            } else if (this.damage < 7) {
                this.context.fillStyle = 'yellow';
            } else {
                this.context.fillStyle = 'red';
            }
            this.context.fillText('Health: ' + this.formatDamage(), 10, 40);
        }
    }, {
        key: 'drawLasers',
        value: function drawLasers() {
            var _this3 = this;

            this.lasers.forEach(function (laser) {
                return laser.draw(_this3.context);
            });
        }
    }, {
        key: 'drawBackground',
        value: function drawBackground() {
            this.context.drawImage(_Images.skyImg, 0, 0, this.canvas.width, this.canvas.height);
            this.context.drawImage(_Images.platformImg, this.platform.x, this.platform.y, this.platform.width, this.platform.height);
        }
    }, {
        key: 'drawTower',
        value: function drawTower() {
            this.tower.draw(this.context);
        }
    }, {
        key: 'drawAerials',
        value: function drawAerials() {
            var _this4 = this;

            this.aerials.forEach(function (aerial) {
                return aerial.draw(_this4.context);
            });
        }
    }, {
        key: 'drawGameOver',
        value: function drawGameOver() {
            this.context.font = "bold 16px 'Press Start 2P'";
            this.context.fillText('Game Over Man! Click to replay.', (this.canvas.width - 200) / 2, (this.canvas.height - 20) / 2, 200, 20);
        }
    }, {
        key: 'draw',
        value: function draw() {
            this.clearCanvas();
            this.drawBackground();
            this.drawScore();
            if (this.alive) {
                this.drawTower();
                this.drawAerials();
                this.drawDamage();
                this.drawLasers();
            } else {
                this.drawGameOver();
            }
        }
    }, {
        key: 'addLaser',
        value: function addLaser() {
            if (this.lasers.length >= this.maxLasers) {
                return;
            }
            if (_Utils.KeyCodes[88]) this.lasers.push(new _Laser.LaserUp(this.tower, this.canvas.width));else if (_Utils.KeyCodes[67]) this.lasers.push(new _Laser.LaserRight(this.tower, this.canvas.width));else if (_Utils.KeyCodes[90]) this.lasers.push(new _Laser.LaserLeft(this.tower, this.canvas.width));
        }
    }, {
        key: 'bindKeys',
        value: function bindKeys() {
            var _this5 = this;

            document.onkeydown = function (event) {
                if (event.keyCode in _Utils.KeyCodes) {
                    _Utils.KeyCodes[event.keyCode] = true;
                }

                if (_Utils.KeyCodes[39]) {
                    _this5.tower.moveLeft();
                } else if (_Utils.KeyCodes[37]) {
                    _this5.tower.moveRight();
                }
                _this5.addLaser();
            };

            document.onkeyup = function (event) {
                if (event.keyCode in _Utils.KeyCodes) {
                    _Utils.KeyCodes[event.keyCode] = false;
                }
            };
        }
    }, {
        key: 'isAlive',
        value: function isAlive() {
            return this.alive;
        }
    }, {
        key: 'init',
        value: function init() {
            var _this6 = this;

            this.bindKeys();
            this.aerials = [].concat(_toConsumableArray(Array.from(new Array(20), function () {
                return new _Slice2.default(_this6.canvas.width, _this6.canvas.height);
            })), _toConsumableArray(Array.from(new Array(20), function () {
                return new _Olive2.default(_this6.canvas.width, _this6.canvas.height);
            })), _toConsumableArray(Array.from(new Array(20), function () {
                return new _Pizza2.default(_this6.canvas.width, _this6.canvas.height);
            })));

            this.aerials.forEach(function (aerial) {
                return aerial.setPosition();
            });

            this.canvas.focus();
        }
    }]);

    return Game;
}();

exports.default = Game;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(4);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(5);

var canvas = document.getElementById('game-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 150;

var game = new _Game2.default(canvas);

var playGame = function playGame() {
    if (game.isAlive()) {
        requestAnimationFrame(playGame);
    } else {
        canvas.addEventListener('click', newGame);
    }

    game.requestFrame();
};

var newGame = function newGame() {
    canvas.removeEventListener('click', newGame);
    game = new _Game2.default(canvas);
    playGame();
};

window.onload = playGame;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LaserLeft = exports.LaserRight = exports.LaserUp = exports.Laser = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tower = __webpack_require__(2);

var _Tower2 = _interopRequireDefault(_Tower);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Laser = exports.Laser = function () {
    function Laser(tower) {
        var canvasWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Laser);

        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.speed = 10;
        this.maxWidth = canvasWidth;
        this.towerCoords = {
            x: tower.x,
            y: tower.y,
            width: tower.width,
            height: tower.height
        };
    }

    _createClass(Laser, [{
        key: 'setPosition',
        value: function setPosition() {
            this.x = this.towerCoords.x + Math.ceil((this.towerCoords.width - this.width) / 2);
            this.y = this.towerCoords.y - this.height;
        }
    }, {
        key: 'draw',
        value: function draw(context) {
            context.fillStyle = '#f00';
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }]);

    return Laser;
}();

var LaserUp = exports.LaserUp = function (_Laser) {
    _inherits(LaserUp, _Laser);

    function LaserUp(tower, canvasWidth) {
        _classCallCheck(this, LaserUp);

        var _this = _possibleConstructorReturn(this, (LaserUp.__proto__ || Object.getPrototypeOf(LaserUp)).call(this, tower, canvasWidth));

        _this.width = 4;
        _this.height = 20;
        _this.setPosition();
        return _this;
    }

    _createClass(LaserUp, [{
        key: 'move',
        value: function move(cb) {
            this.y -= this.speed;
            if (this.y <= this.height) {
                cb();
            }
        }
    }]);

    return LaserUp;
}(Laser);

var LaserRight = exports.LaserRight = function (_Laser2) {
    _inherits(LaserRight, _Laser2);

    function LaserRight(tower, canvasWidth) {
        _classCallCheck(this, LaserRight);

        var _this2 = _possibleConstructorReturn(this, (LaserRight.__proto__ || Object.getPrototypeOf(LaserRight)).call(this, tower, canvasWidth));

        _this2.width = 20;
        _this2.height = 4;
        _this2.setPosition();
        return _this2;
    }

    _createClass(LaserRight, [{
        key: 'move',
        value: function move(cb) {
            this.x += this.speed;
            if (this.x >= this.maxWidth - this.width) {
                cb();
            }
        }
    }]);

    return LaserRight;
}(Laser);

var LaserLeft = exports.LaserLeft = function (_Laser3) {
    _inherits(LaserLeft, _Laser3);

    function LaserLeft(tower, canvasWidth) {
        _classCallCheck(this, LaserLeft);

        var _this3 = _possibleConstructorReturn(this, (LaserLeft.__proto__ || Object.getPrototypeOf(LaserLeft)).call(this, tower, canvasWidth));

        _this3.width = 20;
        _this3.height = 4;
        _this3.setPosition();
        return _this3;
    }

    _createClass(LaserLeft, [{
        key: 'move',
        value: function move(cb) {
            this.x -= this.speed;
            if (this.x <= this.width) {
                cb();
            }
        }
    }]);

    return LaserLeft;
}(Laser);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Enemy2 = __webpack_require__(1);

var _Enemy3 = _interopRequireDefault(_Enemy2);

var _Images = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Olive = function (_Enemy) {
    _inherits(Olive, _Enemy);

    function Olive(canvasWidth, canvasHeight) {
        _classCallCheck(this, Olive);

        var _this = _possibleConstructorReturn(this, (Olive.__proto__ || Object.getPrototypeOf(Olive)).call(this, canvasWidth, canvasHeight));

        _this.width = 20;
        _this.height = 20;
        _this.points = -5;
        _this.img = _Images.oliveImg;
        return _this;
    }

    return Olive;
}(_Enemy3.default);

exports.default = Olive;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Enemy2 = __webpack_require__(1);

var _Enemy3 = _interopRequireDefault(_Enemy2);

var _Images = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pizza = function (_Enemy) {
    _inherits(Pizza, _Enemy);

    function Pizza(canvasWidth, canvasHeight) {
        _classCallCheck(this, Pizza);

        var _this = _possibleConstructorReturn(this, (Pizza.__proto__ || Object.getPrototypeOf(Pizza)).call(this, canvasWidth, canvasHeight));

        _this.width = 30;
        _this.height = 30;
        _this.points = 5;
        _this.img = _Images.pizzaImg;
        return _this;
    }

    return Pizza;
}(_Enemy3.default);

exports.default = Pizza;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Enemy2 = __webpack_require__(1);

var _Enemy3 = _interopRequireDefault(_Enemy2);

var _Images = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slice = function (_Enemy) {
    _inherits(Slice, _Enemy);

    function Slice(canvasWidth, canvasHeight) {
        _classCallCheck(this, Slice);

        var _this = _possibleConstructorReturn(this, (Slice.__proto__ || Object.getPrototypeOf(Slice)).call(this, canvasWidth, canvasHeight));

        _this.width = 30;
        _this.height = 30;
        _this.points = 5;
        _this.img = _Images.pizzaSliceImg;
        return _this;
    }

    return Slice;
}(_Enemy3.default);

exports.default = Slice;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/olive.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/platform.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/sky.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/slicesprite.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/towersprite.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/wholepizza.png";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 17;

/***/ })
/******/ ]);