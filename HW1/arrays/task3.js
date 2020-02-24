function task3(arr) {
    min=arr[1];
    for (let i=0; i<=arr.length; ++i) {
        if(arr[i]<min) {
            min = arr[i];
        }
    }

    return arr.indexOf(min)
} 

