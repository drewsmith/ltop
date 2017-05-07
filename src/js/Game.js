'use strict'

import Pizza from './Pizza'
import Olive from './Olive'
import Slice from './Slice'
import Tower from './Tower'
import { Direction, Laser } from './Laser'
import { skyImg, platformImg } from './Images'
import Utils from './Utils'


const KeyCodes = {
    39: false,
    37: false,
    88: false, // X
    67: false, // C
    90: false, // Z
}

export default class Game {
    constructor(canvas) {
        this.canvas = canvas
        this.context = canvas.getContext('2d')
        this.score = 0
        this.aerials = []
        this.lasers = []
        this.maxLasers = 3
        this.platform = {
            width: this.canvas.width,
            height: 20,
            x: 0,
            y: (this.canvas.height - 20)
        }
        this.tower = new Tower(this.canvas.width, this.canvas.height)
    }
    requestFrame() {
        this.moveAerials()
        this.moveLasers()
        this.draw()
    }
    moveAerials() {
        this.aerials.forEach(aerial => {
            if (this.lasers.length > 0) {
                this.lasers.forEach(laser => {
                    if (Utils.isColliding(aerial, laser)) {
                        aerial.setPosition()
                        this.removeLaser(laser)
                        this.score += 10;
                    }
                })
            }
            if (Utils.isColliding(aerial, this.tower)) {
                this.score -= 5
                aerial.setPosition()
            } else {
                aerial.move()
            }
        })
    }
    moveLasers() {
        this.lasers.forEach(laser => {
            laser.move(() => this.removeLaser(laser))
        })
    }
    removeLaser(laser) {
        this.lasers.splice(this.lasers.indexOf(laser), 1);
    }
    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    drawScore() {
        this.context.font = "bold 12px 'Press Start 2P'";
        this.context.fillStyle = 'black';
        this.context.fillText('Score: ' + this.score, 10, 20);
    }
    drawLasers() {
        this.lasers.forEach(laser => laser.draw(this.context))
    }
    drawBackground() {
        this.context.drawImage(skyImg, 0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(platformImg, this.platform.x, this.platform.y, this.platform.width, this.platform.height);
    }
    drawTower() {
        this.tower.draw(this.context)
    }
    drawAerials() {
        this.aerials.forEach(aerial => aerial.draw(this.context));
    }
    draw() {
        this.clearCanvas()
        this.drawBackground()
        this.drawTower()
        this.drawAerials()
        this.drawScore()
        this.drawLasers()
    }
    addLaser(laserDirection) {
        if (this.lasers.length < this.maxLasers) {
            this.lasers.push(new Laser(this.tower, laserDirection, this.canvas.width))
        }
    }
    bindKeys() {
        document.onkeydown = (event) => {
            if (event.keyCode in KeyCodes) {
                KeyCodes[event.keyCode] = true;
            }

            if (KeyCodes[39]) {

                this.tower.moveLeft()

                if (KeyCodes[88]) {
                    this.addLaser(Direction.UP)
                } else if (KeyCodes[67]) {
                    this.addLaser(Direction.RIGHT)
                } else if (KeyCodes[90]) {
                    this.addLaser(Direction.LEFT)
                }

            } else if (KeyCodes[37]) {

                this.tower.moveRight()
                if (KeyCodes[88]) {
                    this.addLaser(Direction.UP)
                } else if (KeyCodes[67]) {
                    this.addLaser(Direction.RIGHT)
                } else if (KeyCodes[90]) {
                    this.addLaser(Direction.LEFT)
                }

            } else if (KeyCodes[88]) {
                this.addLaser(Direction.UP)
            } else if (KeyCodes[67]) {
                this.addLaser(Direction.RIGHT)
            } else if (KeyCodes[90]) {
                this.addLaser(Direction.LEFT)
            }
        }

        document.onkeyup = (event) => {
            if (event.keyCode in KeyCodes) {
                KeyCodes[event.keyCode] = false
            }
        }
    }
    init() {
        this.bindKeys()
        this.aerials = [
            ...Array.from(new Array(10), () => new Slice(this.canvas.width, this.canvas.height)),
            ...Array.from(new Array(10), () => new Olive(this.canvas.width, this.canvas.height)),
            ...Array.from(new Array(3), () => new Pizza(this.canvas.width, this.canvas.height))
        ]

        this.aerials.forEach(aerial => aerial.setPosition())

        this.canvas.focus()
    }
}