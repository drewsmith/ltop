'use strict'

import Enemy from './Enemy'
import { oliveImg } from './Images'

export default class Olive extends Enemy {
    constructor(canvasWidth, canvasHeight) {
        super(canvasWidth, canvasHeight);
        this.width = 20;
        this.height = 20;
        this.points = -5;
        this.img = oliveImg;
    }
}