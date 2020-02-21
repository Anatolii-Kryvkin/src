function binarySearch(arr, item) {  // 3. Найти корень натурального числа с точностью до целого.
    let low = 0,                    // Расмотреть вариант посл. подбора и метод бинарного поиска.
        high = arr.length - 1,
        sqrt = 0;
    
    sqrt = Math.round(Math.sqrt(item));
    console.log(sqrt);

    while(low<=high) {
        let mid = Math.floor((high+low)/2);
        
        if( arr[mid] === item ) {
            return mid
        } else if( arr[mid] > item ) {
            high = mid - 1;
        } else  {
            low = mid + 1;
        };     
    };
};

    console.log(binarySearch([1, 3, 9, 26, 45, 55, 80], 9));