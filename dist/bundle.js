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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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

var _Utils = __webpack_require__(8);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enemy = function () {
    function Enemy() {
        _classCallCheck(this, Enemy);

        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.width = 0;
        this.height = 0;
        this.points = 0;
        this.img = null;
        this.speeds = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6];
    }

    _createClass(Enemy, [{
        key: 'setPosition',
        value: function setPosition(canvas) {
            this.x = Math.random() * (canvas.width - this.width);
            this.y = 15 + Math.random() * 30;
            var randomSpeed = this.speeds[Math.floor(Math.random() * this.speeds.length)];
            this.speed = randomSpeed + Math.random();
        }
    }, {
        key: 'checkCollision',
        value: function checkCollision(otherObject, canvas) {
            var pointTotal = 0;
            if (_Utils2.default.isColliding(this, otherObject)) {
                pointTotal = this.points;
                this.setPosition(canvas);
            }
            this.y += this.speed;
            if (this.y > canvas.height) {
                this.setPosition(canvas);
            }
            return pointTotal;
        }
    }, {
        key: 'draw',
        value: function draw(ctx) {
            console.log(ctx);
            console.log(this.img);
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

    function Olive() {
        _classCallCheck(this, Olive);

        var _this = _possibleConstructorReturn(this, (Olive.__proto__ || Object.getPrototypeOf(Olive)).call(this));

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
/* 2 */
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
pizzaImg.src = __webpack_require__(12);

var Pizza = function (_Enemy) {
    _inherits(Pizza, _Enemy);

    function Pizza() {
        _classCallCheck(this, Pizza);

        var _this = _possibleConstructorReturn(this, (Pizza.__proto__ || Object.getPrototypeOf(Pizza)).call(this));

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
/* 3 */
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
pizzaSliceImg.src = __webpack_require__(11);

var Slice = function (_Enemy) {
    _inherits(Slice, _Enemy);

    function Slice() {
        _classCallCheck(this, Slice);

        var _this = _possibleConstructorReturn(this, (Slice.__proto__ || Object.getPrototypeOf(Slice)).call(this));

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
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/platform.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/sky.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/towersprite.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Utils = {};

Utils.isColliding = function (firstObject, secondObject) {
    return !(secondObject.x > firstObject.x + firstObject.width || secondObject.x + secondObject.width < firstObject.x || secondObject.y > firstObject.y + firstObject.height || secondObject.y + secondObject.height < firstObject.y);
};

exports.default = Utils;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Pizza = __webpack_require__(2);

var _Pizza2 = _interopRequireDefault(_Pizza);

var _Olive = __webpack_require__(1);

var _Olive2 = _interopRequireDefault(_Olive);

var _Slice = __webpack_require__(3);

var _Slice2 = _interopRequireDefault(_Slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(4);

var skyImg = new Image();
skyImg.src = __webpack_require__(6);

var platformImg = new Image();
platformImg.src = __webpack_require__(5);

var towerImg = new Image();
towerImg.src = __webpack_require__(7);

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
};

var slices = [];
var olives = [];
var pizzas = [];

document.onkeydown = function (event) {
    if (event.keyCode == 39) {
        tower.x += tower.towerSpeed;
        if (tower.x >= canvas.width - tower.width) {
            tower.x = canvas.width - tower.width;
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
};

function animate() {
    if (continueAnimating) {
        requestAnimationFrame(animate);
    }

    slices.forEach(function (slice) {
        return slice.checkCollision(tower, canvas);
    });
    olives.forEach(function (olive) {
        return olive.checkCollision(tower, canvas);
    });
    pizzas.forEach(function (pizza) {
        return pizza.checkCollision(tower, canvas);
    });

    drawAll();
}

function drawAll() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(skyImg, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(platformImg, 0, canvas.height - 20, canvas.width, 20);
    ctx.drawImage(towerImg, tower.x, tower.y, tower.width, tower.height);

    slices.forEach(function (slice) {
        return slice.draw(ctx);
    });
    olives.forEach(function (olive) {
        return olive.draw(ctx);
    });
    pizzas.forEach(function (pizza) {
        return pizza.draw(ctx);
    });

    ctx.font = "bold 12px 'Press Start 2P'";
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + score, 10, 20);
}

(function startGame() {
    slices = Array.from(new Array(10), function () {
        return new _Slice2.default();
    });
    slices.forEach(function (slice) {
        return slice.setPosition(canvas);
    });

    olives = Array.from(new Array(10), function () {
        return new _Olive2.default();
    });
    olives.forEach(function (olive) {
        return olive.setPosition(canvas);
    });

    pizzas = Array.from(new Array(3), function () {
        return new _Pizza2.default();
    });
    pizzas.forEach(function (pizza) {
        return pizza.setPosition(canvas);
    });

    canvas.focus();
    animate();
})();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/olive.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/slicesprite.jpg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/wholepizza.png";

/***/ })
/******/ ]);