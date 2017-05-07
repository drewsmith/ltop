'use strict'

import Enemy from './Enemy'
import { pizzaImg } from './Images'

export default class Pizza extends Enemy {
    constructor(canvasWidth, canvasHeight) {
        super(canvasWidth, canvasHeight);
        this.width = 30;
        this.height = 30;
        this.points = 5;
        this.img = pizzaImg;
    }
}