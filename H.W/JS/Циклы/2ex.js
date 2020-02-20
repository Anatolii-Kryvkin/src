function isPrime(n) {   //2. Проверить простое ли число?
    if (n === 1) {
        return false;
    }

    for (let i = 2; i*i <=n; ++i) {
        if(n % 2 === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(5))
