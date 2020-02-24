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
