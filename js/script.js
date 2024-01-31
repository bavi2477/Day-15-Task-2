document.addEventListener('DOMContentLoaded', function () {
    const result = document.getElementById('result');
    const clear = document.getElementById('clear');
    const equal = document.getElementById('equal');

    for (let i = 0; i <= 9; i++) {
        const button = document.getElementById(i.toString());
        if (button) {
            button.addEventListener('click', function () {
                result.value += i;
            });
        }
    }

    const doubleZeroButton = document.getElementById('double-zero');
    if (doubleZeroButton) {
        doubleZeroButton.addEventListener('click', function () {
            result.value += '00';
        });
    }

    const operators = ['add', 'subtract', 'multiply', 'divide', 'modulus'];
    operators.forEach(operator => {
        const button = document.getElementById(operator);
        if (button) {
            button.addEventListener('click', function () {
                if (/^\d/.test(result.value)) {
                    result.value += operator === 'add' ? '+' :
                                    operator === 'subtract' ? '-' :
                                    operator === 'multiply' ? '*' :
                                    operator === 'divide' ? '/' :
                                    operator === 'modulus' ? '%' : '';
                } else {
                    alert('Only numbers are allowed.');
                }
            });
        }
    });

   
    clear.addEventListener('click', function () {
        result.value = '';
    });

 
    equal.addEventListener('click', function () {
        try {
            result.value = eval(result.value);
        } catch (error) {
            alert('Invalid expression. Please enter a valid expression.');
        }
    });

   
    result.addEventListener('keydown', function (event) {
        const key = event.key;
        const isNumber = /^\d$/.test(key);
        const isOperator = /^[\+\-\*\/\%]$/.test(key);

        if (!isNumber && isOperator) {
            alert('Only numbers are allowed.');
            event.preventDefault();
        }
    });
});