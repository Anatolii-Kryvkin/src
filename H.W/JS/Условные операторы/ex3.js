           //3) Посчитать суммы только положительных из трех чисел.
function ex3(a, b, c) {
    suma = 0;
    if (Math.sign(a) === 1) {
        suma +=a;
    } else {
        console.log('Число A не положительное');
    };

    if (Math.sign(b) === 1) {
        suma +=b;
    } else {
        console.log('Число B не положительное');
    };

    if (Math.sign(c) === 1) {
        suma +=c;
    } else {
        console.log('Число С не положительное');
    };
    return suma;
}
