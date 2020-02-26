<<<<<<< HEAD:HW1/arrays/task5.js
const task5 = (arr) => {
    let result = 0;

    for (let i = 1; i < arr.length; i++) {
        if (i % 2 > 0) {
            if (isNaN(arr[i])) {
                result += 0;
            } else {
                result += arr[i]; 
            }
        }
    }

    return result;
=======
const task5 = (arr) => {
    let result = 0;

    for (let i = 1; i < arr.length; i++) {
        if (i % 2 > 0) {
            if (isNaN(arr[i])) {
                result += 0;
            } else {
                result += arr[i]; 
            }
        }
    }

    return result;
>>>>>>> 0bfb9df792b6b25797c5320db47eacfff9be39b0:H.W/JS/Одномерные массивы/5ex.js
};