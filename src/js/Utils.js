'use strict'

export const Utils = {
    isColliding: (firstObject, secondObject) => {
        return !(secondObject.x > firstObject.x + firstObject.width ||
            secondObject.x + secondObject.width < firstObject.x ||
            secondObject.y > firstObject.y + firstObject.height ||
            secondObject.y + secondObject.height < firstObject.y);
    },

    newImage: (path) => {
        let img = new Image();
        img.src = require(path);
        return img;
    }
}

export const KeyCodes = {
    39: false,
    37: false,
    88: false, // X
    67: false, // C
    90: false, // Z
}