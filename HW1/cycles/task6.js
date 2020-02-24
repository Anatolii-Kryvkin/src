 //5. Вывести число, которое является зеркальным отоброжением 
// последовательности цифр заданого числа, например число 123.
const task6 = (number) => {
    let stringNumber = String(number);
    let res = '';

    if (isNaN(number)) {
        return NaN;
    }

    for (let i = stringNumber.length - 1; i >= 0; i--) {
        if (isNaN(stringNumber[i])) {
            res += '';
        } else {
            res += stringNumber[i];
        }
    }

    return Number(res);
};