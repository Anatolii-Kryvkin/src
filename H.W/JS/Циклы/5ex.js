let number = 3096,              // 4. Посчитать сумму цифр заданного числа. 
    figures = '' + number,
    sum = 0;
for (let i = 0; i<figures.length; i++ ) {
    sum += + figures[i]
};

console.log(sum);