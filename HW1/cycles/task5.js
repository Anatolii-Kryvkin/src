function task5(number) {           // 4. Посчитать сумму цифр заданного числа. 
    figures = '' + number,
    sum = 0;
    for (let i = 0; i<figures.length; i++ ) {
        sum += + figures[i]
    };
    return sum;
}