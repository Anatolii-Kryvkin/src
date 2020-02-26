<<<<<<< HEAD:HW1/functions/task4.js
function task4(x1, y1, x2, y2) {
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        return undefined;
    }

    let ex4 = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

    return Number(ex4.toFixed(2));
=======
function task4(x1, y1, x2, y2) {
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        return undefined;
    }

    let ex4 = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

    return Number(ex4.toFixed(2));
>>>>>>> 0bfb9df792b6b25797c5320db47eacfff9be39b0:H.W/JS/Функции/ex4.js
};