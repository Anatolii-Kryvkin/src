<<<<<<< HEAD:HW1/arrays/task9.js
function task9(arr) {
  for (var j = 0; j < arr.length; j++) {
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] > arr[i + 1]) {
              var temp = arr[i];
             arr[i] = arr[i + 1];
              arr[i + 1] = temp;
          }
      }
  }
  return arr;
=======
function task9(arr) {
  for (var j = 0; j < arr.length; j++) {
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] > arr[i + 1]) {
              var temp = arr[i];
             arr[i] = arr[i + 1];
              arr[i + 1] = temp;
          }
      }
  }
  return arr;
>>>>>>> 0bfb9df792b6b25797c5320db47eacfff9be39b0:H.W/JS/Одномерные массивы/9ex.js
}