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
/******/ 	__webpack_require__.p = "C:\\Users\\DrEnder\\Desktop\\drew\\drewsmith.github.io/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Utils = __webpack_require__(2);

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
        this.speeds = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6];
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var towerImg = new Image();
towerImg.src = __webpack_require__(14);

var Tower = function () {
    function Tower() {
        var maxWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var maxHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Tower);

        this.maxHeight = maxHeight;
        this.height = 160;
        this.width = 50;
        this.y = maxHeight - this.height;
        this.x = 0;
        this.img = towerImg;
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Utils = {};

Utils.isColliding = function (firstObject, secondObject) {
    return !(secondObject.x > firstObject.x + firstObject.width || secondObject.x + secondObject.width < firstObject.x || secondObject.y > firstObject.y + firstObject.height || secondObject.y + secondObject.height < firstObject.y);
};

Utils.newImage = function (path) {
    var img = new Image();
    img.src = !(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
    return img;
};

exports.default = Utils;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Pizza = __webpack_require__(8);

var _Pizza2 = _interopRequireDefault(_Pizza);

var _Olive = __webpack_require__(7);

var _Olive2 = _interopRequireDefault(_Olive);

var _Slice = __webpack_require__(9);

var _Slice2 = _interopRequireDefault(_Slice);

var _Tower = __webpack_require__(1);

var _Tower2 = _interopRequireDefault(_Tower);

var _Laser = __webpack_require__(6);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var skyImg = new Image();
skyImg.src = __webpack_require__(12);

var platformImg = new Image();
platformImg.src = __webpack_require__(11);

var KeyCodes = {
    39: false,
    37: false,
    88: false, // X
    67: false, // C
    90: false };

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
        this.tower = new _Tower2.default(this.canvas.width, this.canvas.height);
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
                        if (_Utils2.default.isColliding(aerial, laser)) {
                            aerial.setPosition();
                            _this.removeLaser(laser);
                            _this.score += 10;
                        }
                    });
                }
                if (_Utils2.default.isColliding(aerial, _this.tower)) {
                    _this.score -= 5;
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
            this.context.drawImage(skyImg, 0, 0, this.canvas.width, this.canvas.height);
            this.context.drawImage(platformImg, this.platform.x, this.platform.y, this.platform.width, this.platform.height);
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
        key: 'draw',
        value: function draw() {
            this.clearCanvas();
            this.drawBackground();
            this.drawTower();
            this.drawAerials();
            this.drawScore();
            this.drawLasers();
        }
    }, {
        key: 'addLaser',
        value: function addLaser(laserDirection) {
            if (this.lasers.length < this.maxLasers) {
                this.lasers.push(new _Laser.Laser(this.tower, laserDirection, this.canvas.width));
            }
        }
    }, {
        key: 'bindKeys',
        value: function bindKeys() {
            var _this5 = this;

            document.onkeydown = function (event) {
                if (event.keyCode in KeyCodes) {
                    KeyCodes[event.keyCode] = true;
                }

                if (KeyCodes[39]) {

                    _this5.tower.moveLeft();

                    if (KeyCodes[88]) {
                        _this5.addLaser(_Laser.Direction.UP);
                    } else if (KeyCodes[67]) {
                        _this5.addLaser(_Laser.Direction.RIGHT);
                    } else if (KeyCodes[90]) {
                        _this5.addLaser(_Laser.Direction.LEFT);
                    }
                } else if (KeyCodes[37]) {

                    _this5.tower.moveRight();
                    if (KeyCodes[88]) {
                        _this5.addLaser(_Laser.Direction.UP);
                    } else if (KeyCodes[67]) {
                        _this5.addLaser(_Laser.Direction.RIGHT);
                    } else if (KeyCodes[90]) {
                        _this5.addLaser(_Laser.Direction.LEFT);
                    }
                } else if (KeyCodes[88]) {
                    _this5.addLaser(_Laser.Direction.UP);
                } else if (KeyCodes[67]) {
                    _this5.addLaser(_Laser.Direction.RIGHT);
                } else if (KeyCodes[90]) {
                    _this5.addLaser(_Laser.Direction.LEFT);
                }
            };

            document.onkeyup = function (event) {
                if (event.keyCode in KeyCodes) {
                    KeyCodes[event.keyCode] = false;
                }
            };
        }
    }, {
        key: 'init',
        value: function init() {
            var _this6 = this;

            this.bindKeys();
            this.aerials = [].concat(_toConsumableArray(Array.from(new Array(10), function () {
                return new _Slice2.default(_this6.canvas.width, _this6.canvas.height);
            })), _toConsumableArray(Array.from(new Array(10), function () {
                return new _Olive2.default(_this6.canvas.width, _this6.canvas.height);
            })), _toConsumableArray(Array.from(new Array(3), function () {
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
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(3);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(4);

var canvas = document.getElementById('game-canvas');

var game = new _Game2.default(canvas);
game.init();

var playGame = function playGame() {
    requestAnimationFrame(playGame);
    game.requestFrame();
};

window.onload = playGame;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Laser = exports.Direction = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Tower = __webpack_require__(1);

var _Tower2 = _interopRequireDefault(_Tower);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Direction = exports.Direction = {
    LEFT: 1,
    UP: 2,
    RIGHT: 3
};

var Laser = exports.Laser = function () {
    function Laser(tower) {
        var laserDirection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Direction.UP;
        var canvasWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        _classCallCheck(this, Laser);

        this.y = 0;
        this.width = 4;
        this.height = 20;
        this.x = tower.x + Math.ceil((tower.width - this.width) / 2);
        this.y = tower.y - this.height;
        this.speed = 10;
        this.direction = laserDirection;
        this.maxWidth = canvasWidth;
    }

    _createClass(Laser, [{
        key: 'moveUp',
        value: function moveUp(cb) {
            this.y -= this.speed;
            if (this.y <= this.height) {
                cb();
            }
        }
    }, {
        key: 'moveLeft',
        value: function moveLeft(cb) {
            this.x -= this.speed;
            if (this.x <= this.width) {
                cb();
            }
        }
    }, {
        key: 'moveRight',
        value: function moveRight(cb) {
            this.x += this.speed;
            if (this.x >= this.maxWidth - this.width) {
                cb();
            }
        }
    }, {
        key: 'move',
        value: function move(cb) {
            if (this.direction === Direction.UP) {
                this.moveUp(cb);
            } else if (this.direction === Direction.LEFT) {
                this.moveLeft(cb);
            } else if (this.direction === Direction.RIGHT) {
                this.moveRight(cb);
            }
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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Enemy2 = __webpack_require__(0);

var _Enemy3 = _interopRequireDefault(_Enemy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var oliveImg = new Image();
oliveImg.src = __webpack_require__(10);

var Olive = function (_Enemy) {
    _inherits(Olive, _Enemy);

    function Olive(canvasWidth, canvasHeight) {
        _classCallCheck(this, Olive);

        var _this = _possibleConstructorReturn(this, (Olive.__proto__ || Object.getPrototypeOf(Olive)).call(this, canvasWidth, canvasHeight));

        _this.width = 20;
        _this.height = 20;
        _this.points = -5;
        _this.img = oliveImg;
        return _this;
    }

    return Olive;
}(_Enemy3.default);

exports.default = Olive;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Enemy2 = __webpack_require__(0);

var _Enemy3 = _interopRequireDefault(_Enemy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pizzaImg = new Image();
pizzaImg.src = __webpack_require__(15);

var Pizza = function (_Enemy) {
    _inherits(Pizza, _Enemy);

    function Pizza(canvasWidth, canvasHeight) {
        _classCallCheck(this, Pizza);

        var _this = _possibleConstructorReturn(this, (Pizza.__proto__ || Object.getPrototypeOf(Pizza)).call(this, canvasWidth, canvasHeight));

        _this.width = 30;
        _this.height = 30;
        _this.points = 5;
        _this.img = pizzaImg;
        return _this;
    }

    return Pizza;
}(_Enemy3.default);

exports.default = Pizza;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Enemy2 = __webpack_require__(0);

var _Enemy3 = _interopRequireDefault(_Enemy2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pizzaSliceImg = new Image();
pizzaSliceImg.src = __webpack_require__(13);

var Slice = function (_Enemy) {
    _inherits(Slice, _Enemy);

    function Slice(canvasWidth, canvasHeight) {
        _classCallCheck(this, Slice);

        var _this = _possibleConstructorReturn(this, (Slice.__proto__ || Object.getPrototypeOf(Slice)).call(this, canvasWidth, canvasHeight));

        _this.width = 30;
        _this.height = 30;
        _this.points = 5;
        _this.img = pizzaSliceImg;
        return _this;
    }

    return Slice;
}(_Enemy3.default);

exports.default = Slice;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/olive.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/platform.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/sky.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/slicesprite.jpg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/towersprite.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/wholepizza.png";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 16;

/***/ })
/******/ ]);