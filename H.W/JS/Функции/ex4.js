function ex4(x1, y1, x2, y2) {
    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        return undefined;
    }

    let ex4 = Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));

    return Number(ex4.toFixed(2));
};