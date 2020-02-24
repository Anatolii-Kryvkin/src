  // 5) Написать программу определения оценки студента по его рейтингу.
                            
    function task5(res)    {   
                            
        if (0 <= res && res <= 19) {
        return 'Оценка студента F';
        }
        else if ( 20<= res && res <= 39) {
        return 'Оценка студента E'; 
        }
        else if (40 <= res && res <= 59) {
        return 'Оценка студента D';
        }
        else if (60 <= res && res <= 74) {
        return 'Оценка студента C'; 
        }
        else if (75 <= res && res <= 89) {
        return 'Оценка студента B'; 
        }
        else if (90 <= res && res <= 100) {
        return 'Оценка студента A'; 
        };
    } 