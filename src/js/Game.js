'use strict'

import Pizza from './Pizza'
import Olive from './Olive'
import Slice from './Slice'
import Tower from './Tower'
import { LaserLeft, LaserRight, LaserUp } from './Laser'
import { skyImg, platformImg } from './Images'
import { KeyCodes, Utils } from './Utils'

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
        this.damage = 0
        this.alive = true
        this.tower = new Tower(this.canvas.width, this.canvas.height)
        this.init()
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
                this.damage += 1
                this.alive = (this.damage < 10)
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
        this.context.fillText(`Score: ${this.score}`, 10, 20);
    }
    formatDamage() {
        return this.damage >= 10 ? '0%' : `${(10 - this.damage)}0%`
    }
    drawDamage() {
        this.context.font = "bold 12px 'Press Start 2P'"
        if (this.damage < 4) {
            this.context.fillStyle = 'green'
        } else if (this.damage < 7) {
            this.context.fillStyle = 'yellow'
        } else {
            this.context.fillStyle = 'red'
        }
        this.context.fillText(`Health: ${this.formatDamage()}`, 10, 40)
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
    drawGameOver() {
        this.context.font = "bold 16px 'Press Start 2P'";
        this.context.fillText('Game Over Man! Click to replay.', (this.canvas.width - 200) / 2, (this.canvas.height - 20) / 2, 200, 20);
    }
    draw() {
        this.clearCanvas()
        this.drawBackground()
        this.drawScore()
        if (this.alive) {
            this.drawTower()
            this.drawAerials()
            this.drawDamage()
            this.drawLasers()
        } else {
            this.drawGameOver()
        }
    }
    addLaser() {
        if (this.lasers.length >= this.maxLasers) {
           return
        }
        let laser = null;

        if (KeyCodes[88]) laser = new LaserUp(this.tower, this.canvas.width)
        else if (KeyCodes[67]) laser = new LaserRight(this.tower, this.canvas.width)
        else if (KeyCodes[90]) laser = new LaserLeft(this.tower, this.canvas.width)
        else return

        this.lasers.push(laser)
    }
    bindKeys() {
        document.onkeydown = (event) => {
            if (event.keyCode in KeyCodes) {
                KeyCodes[event.keyCode] = true;
            }

            if (KeyCodes[39]) {
                this.tower.moveLeft()
            } else if (KeyCodes[37]) {
                this.tower.moveRight()
            }
            this.addLaser()
        }

        document.onkeyup = (event) => {
            if (event.keyCode in KeyCodes) {
                KeyCodes[event.keyCode] = false
            }
        }
    }
    isAlive() {
        return this.alive
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