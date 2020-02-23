function ex8(arr) {
    result = [];
    for (let i = 0; i<arr.length; i+=6) {
        result.push(arr[i+2], arr[i+3], arr[i+0], arr[i+1])
    }
    return result;
}