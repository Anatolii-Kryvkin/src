    let n = 1;          //2. Проверить простое ли число?
        if (n === 1) {
            console.log(` ${n}, это  не простое число!`);
        };

        for (let i = 2; i*i <=n; ++i) {
            if(n % 2 === 0) {
                console.log(` ${n}, это  не простое число!`);
            } else {
                console.log(` ${n}, это простое число!`);
            };
        };