let numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    clearBtns = document.querySelectorAll('.clear_btn'),
    decimals = document.getElementById('decimal'),
    resultBtn = document.getElementById('result'),
    display = document.getElementById('display'),
    MemoryCurrentNumber = '0',
    MemoryNewNumber = false,
    MemoryPendionOperation = '';

for (let i=0; i<numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function(e) {
        numberPress(e.target.textContent)
    }) 
}

for (let i=0; i<operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function(e) {
        operation(e.target.textContent);
    }) 
}

for (let i=0; i<clearBtns.length; i++) {
    let clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function(e) {
        clear(e.srcElement.id)
    });
}

decimals.addEventListener('click', decimal);

resultBtn.addEventListener('click', result);


function numberPress (number) {
    if (MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
    } else {
        if (display.value === '0') {
            display.value = number;
        } else {
            display.value += number;
        }
    };    
}

function operation(op) {
    localOperationMemory = display.value;

    if (MemoryNewNumber) {
        display.value = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendionOperation === '+') {
            MemoryCurrentNumber  += parseFloat(localOperationMemory);
        } else if (MemoryPendionOperation === '-') {
            MemoryCurrentNumber  -= parseFloat(localOperationMemory);
        } else if (MemoryPendionOperation === '*') {
            MemoryCurrentNumber  *= parseFloat(localOperationMemory);
        } else if (MemoryPendionOperation === '/') {
            MemoryCurrentNumber /= parseFloat(localOperationMemory);
        } else {
            MemoryCurrentNumber = parseFloat(localOperationMemory);
        }

        display.value = MemoryCurrentNumber;
        MemoryPendionOperation = op;
    }

    console.log('Клик по кнопке с операцией ' + op + '!')
}

function clear(id) {
    display.value = '';
    console.log('Клик по кнопке ' + id + '!')
}

function decimal() {
    console.log('Клик по кнопке c точкой')
}

// function result() {
//     console.log('Клик по кнопке результат')
// }

