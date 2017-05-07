'use strict'

import Tower from './Tower'

export class Laser {
    constructor(tower, canvasWidth = 0) {
        this.x = 0
        this.y = 0
        this.width = 0
        this.height = 0
        this.speed = 10
        this.maxWidth = canvasWidth
        this.towerCoords = {
            x: tower.x,
            y: tower.y,
            width: tower.width,
            height: tower.height
        }
    }
    setPosition() {
        this.x = this.towerCoords.x + Math.ceil((this.towerCoords.width - this.width) / 2)
        this.y = this.towerCoords.y - this.height
    }
    draw(context) {
        context.fillStyle = '#f00';
        context.fillRect(this.x, this.y, this.width, this.height)
    }
}

export class LaserUp extends Laser {
    constructor(tower, canvasWidth) {
        super(tower, canvasWidth)
        this.width = 4
        this.height = 20
        this.setPosition()
    }
    move(cb) {
        this.y -= this.speed;
        if (this.y <= this.height) {
            cb()
        }
    }
}

export class LaserRight extends Laser {
    constructor(tower, canvasWidth) {
        super(tower, canvasWidth)
        this.width = 20
        this.height = 4
        this.setPosition()
    }
    move(cb) {
        this.x += this.speed;
        if (this.x >= (this.maxWidth - this.width)) {
            cb()
        }
    }
}

export class LaserLeft extends Laser {
    constructor(tower, canvasWidth) {
        super(tower, canvasWidth)
        this.width = 20
        this.height = 4
        this.setPosition()
    }
    move(cb) {
        this.x -= this.speed;
        if (this.x <= this.width) {
            cb()
        }
    }
}