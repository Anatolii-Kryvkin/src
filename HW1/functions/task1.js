<<<<<<< HEAD:HW1/functions/task1.js
function task1(day)  {
    const days = [
        'Понедельник', 
        'Вторник', 
        'Среда', 
        'Четверг', 
        'Пятница', 
        'Суббота', 
        'Воскресенье'
    ];

    let result = days[day - 1];
    
    if(day < 1 || day > 7) {
        result = "Введите чило от 1 до 7!";
    }
    return result;
};
=======
function task1(day)  {
    const days = [
        'Понедельник', 
        'Вторник', 
        'Среда', 
        'Четверг', 
        'Пятница', 
        'Суббота', 
        'Воскресенье'
    ];

    let result = days[day - 1];
    
    if(day < 1 || day > 7) {
        result = "Введите чило от 1 до 7!";
    }
    return result;
};
>>>>>>> 0bfb9df792b6b25797c5320db47eacfff9be39b0:H.W/JS/Функции/ex1.js
