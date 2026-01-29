const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
const backButton = document.querySelector('.back');


display.value = 0;

let shouldClear = false;

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        const value = button.textContent.trim();

        if(!/^[0-9+\-*/.]$/.test(value)) {
            return;
        }

        if(shouldClear) {
            display.value = '';
            shouldClear = false;
        }


        if (display.value === "0") {
            display.value = value;
        } else {
            display.value += value;
        }
    });
});


operators.forEach(operator => {
    operator.addEventListener('click', () => {
        const op = operator.textContent.trim();
        const lastChar = display.value.slice(-1);

        if(shouldClear)  shouldClear = false;

        if (['+', '-', '*', '/'].includes(lastChar)) {
            display.value = display.value.slice(0, -1) + op;
        } else {
            display.value += op;
        }
    });
});

if (clearButton) {
    clearButton.addEventListener('click', () => {
        display.value = '0';
        shouldClear = true;
    });
}

if (backButton) {
    backButton.addEventListener('click', () => {
        display.value = display.value.slice(0, -1);
    });
}


 function calculate() {

    if (display.value === ''  || display.value === '0' || display.value === 'Error')  {
        return '';
    }

    try {

        return eval(display.value);

    } 
    
    catch {
        return 'Error';
    }
     
}

equalButton.addEventListener('click', () => {
    display.value = calculate();
    shouldClear = true;

 });



