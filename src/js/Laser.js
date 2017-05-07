'use strict'

import Tower from './Tower'

export const Direction = {
    LEFT: 1,
    UP: 2,
    RIGHT: 3
}

export class Laser {
    constructor(tower, laserDirection = Direction.UP, canvasWidth = 0) {
        this.y = 0
        this.width = 4
        this.height = 20
        this.x = tower.x + Math.ceil((tower.width - this.width) / 2)
        this.y = tower.y - this.height
        this.speed = 10
        this.direction = laserDirection
        this.maxWidth = canvasWidth
    }
    moveUp(cb) {
        this.y -= this.speed;
        if (this.y <= this.height) {
            cb()
        }
    }
    moveLeft(cb) {
        this.x -= this.speed;
        if (this.x <= this.width) {
            cb()
        }
    }
    moveRight(cb) {
        this.x += this.speed;
        if (this.x >= (this.maxWidth - this.width)) {
            cb()
        }
    }
    move(cb) {
        if(this.direction === Direction.UP) {
            this.moveUp(cb)
        } else if (this.direction === Direction.LEFT) {
            this.moveLeft(cb)
        } else if (this.direction === Direction.RIGHT) {
            this.moveRight(cb)
        }
    }
    draw(context) {
        context.fillStyle = '#f00';
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}