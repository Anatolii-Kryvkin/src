const a = 2;               //4) Посчитать выражение макс(а*б*с, a+б+с)+3.
const b = 5;
const c = 4;
let sum = (a + b + c);
let mult = (a * b * c);
let result = sum;
let result1 = mult;
    if (sum > mult) {
        console.log(result + 3);
    } else if (mult > sum) {
        console.log(result1 + 3);
    }
