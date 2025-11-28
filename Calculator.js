const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');


display.value = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (display.value === "0") {
            display.value = button.textContent.trim();
        } else {
            display.value += button.textContent.trim();
        }
    });
});


operators.forEach(operator => {
    operator.addEventListener('click', () => {
        const op = operator.textContent.trim();
        const lastChar = display.value.slice(-1);

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
    });
}

if (equalButton) {
    equalButton.addEventListener('click', () => {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    });
}