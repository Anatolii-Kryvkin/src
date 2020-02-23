function ex3(string) {
    if (typeof string !== 'string') {
        return undefined;
    }

let first = {
    'ноль': 0,
    'один': 1,
    'два': 2,
    'три': 3,
    'четыре': 4, 
    'пять': 5,
    'шесть': 6,
    'семь': 7,
    'восемь': 8,
    'девять': 9
};
let second = {
    'десять': 10,
    'одиннадцать': 11,
    'двенадцать': 12,
    'тринадцать': 13, 
    'четырнадцать': 14,
    'пятнадцать': 15,
    'шестнадцать': 16, 
    'семнадцать': 17,
    'восемнадцать': 18,
    'девятнадцать': 19
};
let third = {
    'двадцать': 20,
    'тридцать': 30,
    'сорок': 40,
    'пятьдесят': 50, 
    'шестьдесят': 60,
    'семьдесят': 70,
    'восемьдесят': 80,
    'девяносто': 90
};
let fourth = {
    'сто': 100,
    'двести': 200,
    'триста': 300, 
    'четыреста': 400,
    'пятьсот': 500, 
    'шестьсот': 600, 
    'семьсот': 700, 
    'восемьсот': 800, 
    'девятьсот': 900
};

let result = 0;
let stringToArr = string.split(' ');
let indexNull = stringToArr[0];
let indexOne = stringToArr[1];
let indexTwo = stringToArr[2];

if(stringToArr.length === 1) {
    if(indexNull in first) {
        result = first[indexNull];
    } else if(indexNull in second) {
        result = second[indexNull];
    } else if(indexNull in third) {
        result = thitd[indexNull];
    } else if(indexNull in fourth) {
        result = fourth[indexNull];
    } 
}

if(stringToArr.length === 2) {
    if(indexNull in second && indexOne in second) {
        result = third[indexNull] + first[indexOne];
    } else if(indexNull in fourth && indexOne in first) {
        result = fourth[indexNull] + first[indexOne];
    } else if(indexNull in fourth && indexOne in second) {
        result = fourth[indexNull] + second[indexOne];
    } else if(indexNull in fourth && indexOne in third) {
        result = fourth[indexNull] + third[indexOne];
    } 
}

if(stringToArr.length === 3) {
    if(indexNull in fourth && indexOne in third && indexTwo in first) {
        result = fourth[indexNull] + third[indexOne] + first[indexTwo];
    } 
}

return result;
}

