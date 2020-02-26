<<<<<<< HEAD:HW1/cycles/task1.js
        // 1) Найти сумму четнЫх чисел и их количество в диапазоне от 1 до 99.
function task1() {
    numbers = 0;
    sum = 0; 
    for (let i = 1; i<=99; i++) {
        if (i % 2 === 0 ) {
            numbers++;
            sum +=i;
            };
        };
        return 'Количество чётных чисел - ' + numbers + ', их сумма - ' + sum;
=======
        // 1) Найти сумму четнЫх чисел и их количество в диапазоне от 1 до 99.
function task1() {
    numbers = 0;
    sum = 0; 
    for (let i = 1; i<=99; i++) {
        if (i % 2 === 0 ) {
            numbers++;
            sum +=i;
            };
        };
        return 'Количество чётных чисел - ' + numbers + ', их сумма - ' + sum;
>>>>>>> 0bfb9df792b6b25797c5320db47eacfff9be39b0:H.W/JS/Циклы/1ex.js
}