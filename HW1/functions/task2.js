function task2(n) {
    let first =  [
        "ноль",
        "один",
        "два",
        "три",
        "четыре",
        "пять",
        "шесть",
        "семь",
        "восемь",
        "девять"
    ];

    let second = [
        "десять",
        "одиннадцать",
        "двенадцать",
        "тринадцать",
        "четырнадцать",
        "пятнадцать",
        "шестнадцать",
        "семнадцать",
        "восемнадцать",
        "девятнадцать"  
    ];

    let third = [
        "двадцать",
        "тридцать",
        "сорок",
        "пятьдесят",
        "шестьдесят",
        "семьдесят",
        "восемьдесят",
        "девяносто",

    ]

    let fourth = [
        "сто",
        "двести",
        "триста",
        "четыреста",
        "пятьсот",
        "шестьсот",
        "семьсот",
        "восемьсот",
        "девятьсот"
    ]

    let result = '';
    let numberToString = String(n);
    let firstIndex = 0;
    let secondIndex = 0;
    let thirdIndex = 0;
    let fourthIndex = 0;

    if(n < 0 || n > 999) {
        result = 'Введите число от 0 до 999';
    }

    if(numberToString.length < 2) {
        result = first[n];
    }  
    
    if(numberToString.length === 2) {
        if(n >= 10 && n < 20) {
            secondIndex = Number(numberToString[1]);

            result = second[secondIndex];     
        } else if (n >= 20 && n <= 99) {
            if(n % 10 === 0) {
                thirdIndex = Number(numberToString[0]) - 2;

                result = third[thirdIndex];                              
            } else if(n % 10 > 0) {
                thirdIndex = Number(numberToString[0]) - 2;
                firstIndex = Number(numberToString[1])

                result = third[thirdIndex] + ' ' + first[firstIndex];            
            }
        }
    }

    if(numberToString.length === 3) {
        if(n % 100 === 0) {
            fourthIndex = Number(numberToString[0]) - 1;

            result = fourth[fourthIndex];                         
        } else if(n % 100 > 0 && n % 100 < 10) {
            fourthIndex = Number(numberToString[0]) - 1;
            firstIndex = Number(numberToString[2])

            result = fourth[fourthIndex] + ' ' + first[firstIndex];   
        } else if(n % 100 >= 10 && n % 100 < 20) {
            fourthIndex = Number(numberToString[0]) - 1;
            secondIndex = Number(numberToString[2])

            result = fourth[fourthIndex] + ' ' + second[secondIndex];   
        } else if(n % 100 >= 20) {
            if((n % 100) % 10 === 0) {
                fourthIndex = Number(numberToString[0]) - 1;
                thirdIndex = Number(numberToString[1]) - 2;

                result = fourth[fourthIndex] + ' ' + third[thirdIndex];
            } else if((n % 100) % 10 > 0) {
                fourthIndex = Number(numberToString[0]) - 1;
                thirdIndex = Number(numberToString[1]) - 2;
                firstIndex = Number(numberToString[2]);

                result = fourth[fourthIndex] + ' ' + third[thirdIndex] + ' ' + first[firstIndex];
            }
        }
    }

    if (isNaN(n)) {
        return undefined;
    }
    
    return result;
};
