'use strict'

import Utils from './Utils'

export default class Enemy {
    constructor(canvasWidth = 0, canvasHeight = 0) {
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
    setPosition() {
        this.x = Math.random() * (this.maxWidth - this.width);
        this.y = 15 + Math.random() * 30;
        let randomSpeed = this.speeds[Math.floor(Math.random() * this.speeds.length)];
        this.speed = randomSpeed + Math.random();
    }
    move() {
        this.y += this.speed;
        if (this.y > this.maxHeight) {
            this.setPosition();
        }
    }
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}