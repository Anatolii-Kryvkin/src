 //1) Если а - четное, посчитать а*б, иначе а + б.

function ex1(a, b) {
  let result = 0;
  if (a % 2 == 0) {
    return  a * b;
  } else {
    return  a + b;
  } 
}

