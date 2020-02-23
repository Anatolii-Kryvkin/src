const ex5 = (arr) => {
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
};