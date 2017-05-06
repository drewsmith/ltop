'use strict'

import Utils from './Utils'

export default class Enemy {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.width = 0;
        this.height = 0;
        this.points = 0;
        this.img = null;
        this.speeds = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6];
    }
    setPosition(canvas) {
        this.x = Math.random() * (canvas.width - this.width);
        this.y = 15 + Math.random() * 30;
        let randomSpeed = this.speeds[Math.floor(Math.random() * this.speeds.length)];
        this.speed = randomSpeed + Math.random();
    }
    checkCollision(otherObject, canvas) {
        let pointTotal = 0;
        if (Utils.isColliding(this, otherObject)) {
            pointTotal = this.points;
            this.setPosition(canvas);
        }
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.setPosition(canvas);
        }
        return pointTotal;
    }
    draw(ctx) {
        console.log(ctx);
        console.log(this.img);
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}