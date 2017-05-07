'use strict'

const Utils = {};

Utils.isColliding = (firstObject, secondObject) => {
    return !(secondObject.x > firstObject.x + firstObject.width ||
        secondObject.x + secondObject.width < firstObject.x ||
        secondObject.y > firstObject.y + firstObject.height ||
        secondObject.y + secondObject.height < firstObject.y);
}

Utils.newImage = (path) => {
    let img = new Image();
    img.src = require(path);
    return img;
}

export default Utils