'use strict'

const Utils = {};

Utils.isColliding = (firstObject, secondObject) => {
    return !(secondObject.x > firstObject.x + firstObject.width ||
        secondObject.x + secondObject.width < firstObject.x ||
        secondObject.y > firstObject.y + firstObject.height ||
        secondObject.y + secondObject.height < firstObject.y);
}

export default Utils;