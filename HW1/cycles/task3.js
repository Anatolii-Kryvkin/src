const task3 = (number) => {   // 3. Найти корень натурального числа с точностью до целого.
    if (isNaN(number)) {    // Расмотреть вариант посл. подбора и метод бинарного поиска.
        return NaN;
    }
    if (number < 0) {
        return 'Ошибка: введите натуральное число!';
    } 
    let i = 1;
    
    while(i * i <= number) {
        i++;
    }
    
    let sqrtRoot = i - 1;
    return 'Корень ' + number + ', найден методом последовательного подбора = ' + sqrtRoot;
};


function binarySearch(arr, item) {  
    let low = 0,                    
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
