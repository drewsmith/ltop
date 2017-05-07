'use strict'

const towerImg = new Image();
towerImg.src = require('../img/towersprite.png')

export default class Tower {
    constructor(maxWidth = 0, maxHeight = 0) {
        this.maxHeight = maxHeight;
        this.height = 160;
        this.width = 50;
        this.y = maxHeight - this.height;
        this.x = 0;
        this.img = towerImg;
        this.speed = 10;
        this.maxWidth = maxWidth;
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    moveLeft() {
        this.x += this.speed;
        if (this.x >= (this.maxWidth - this.width)) {
            this.x = (this.maxWidth - this.width);
        }
    }
    moveRight() {
        this.x -= this.speed;
        if (this.x <= 0) {
            this.x = 0;
        }
    }
}