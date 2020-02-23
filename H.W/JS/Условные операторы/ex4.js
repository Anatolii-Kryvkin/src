function ex4(a, b, c) {   //4) Посчитать выражение макс(а*б*с, a+б+с)+3.
    
    if (a * b * c > a + b + c) {
        return a * b * c + 3;
    } else {
        return a + b + c + 3;
    }   
}


