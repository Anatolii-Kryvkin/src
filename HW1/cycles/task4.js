function task4(n) {          // 4. Вычислить факториал числа n. !n = 1*2*...*n-1*n    
    result = 1;

    for (let i = 1; i <= n; i++) {
     result *= i;
    }
    return result
}