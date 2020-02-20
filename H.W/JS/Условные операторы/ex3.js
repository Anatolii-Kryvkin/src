let a = 50;             //3) Посчитать суммы только положительных из трех чисел.
let b = 12;
let c = -48;
let suma = 0;

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


    console.log('Сумма положительных чисел  = ' +  suma );