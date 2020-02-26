<<<<<<< HEAD:HW1/cycles/task2.js
//2. Проверить простое ли число?      
function task2(n) {    
    if (n === 1) {
            return `${n}, это не простое число!`;
        };

        for (let i = 2; i*i <=n; ++i) {
            if(n % 2 === 0) {
                return `${n}, это не простое число!`;
            } else {
                return `${n}, это простое число!`;
            };
        };
=======
//2. Проверить простое ли число?      
function task2(n) {    
    if (n === 1) {
            return `${n}, это не простое число!`;
        };

        for (let i = 2; i*i <=n; ++i) {
            if(n % 2 === 0) {
                return `${n}, это не простое число!`;
            } else {
                return `${n}, это простое число!`;
            };
        };
>>>>>>> 0bfb9df792b6b25797c5320db47eacfff9be39b0:H.W/JS/Циклы/2ex.js
    }    