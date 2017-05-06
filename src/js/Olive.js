'use strict'

import Enemy from './Enemy'

const oliveImg = new Image();
oliveImg.src = require('../img/olive.png');

export default class Olive extends Enemy {
    constructor() {
        super();
        this.width = 20;
        this.height = 20;
        this.points = -5;
        this.img = oliveImg;
    }
}