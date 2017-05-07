'use strict'

import Enemy from './Enemy'
import { pizzaSliceImg } from './Images'

export default class Slice extends Enemy {
    constructor(canvasWidth, canvasHeight) {
        super(canvasWidth, canvasHeight);
        this.width = 30;
        this.height = 30;
        this.points = 5;
        this.img = pizzaSliceImg;
    }
}