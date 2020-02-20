let a = 2;       //1) Если а - четное, посчитать а*б, иначе а + б.
let b = 3;
let result = 0;
 if (a % 2 == 0) {
  result = a * b;
 } else {
  result = a + b;
}

console.log('Результат = ' + result);