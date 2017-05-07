'use strict'

import Enemy from './Enemy'

const pizzaSliceImg = new Image();
pizzaSliceImg.src = require('../img/slicesprite.jpg');

export default class Slice extends Enemy {
    constructor(canvasWidth, canvasHeight) {
        super(canvasWidth, canvasHeight);
        this.width = 30;
        this.height = 30;
        this.points = 5;
        this.img = pizzaSliceImg;
    }
}