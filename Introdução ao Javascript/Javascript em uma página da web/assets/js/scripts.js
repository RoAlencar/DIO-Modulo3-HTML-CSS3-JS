var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    if (currentNumber != 10) {
        currentNumber++;
        currentNumberWrapper.innerHTML = currentNumber;
    } else {
        console.log('Não são permitidos valores acima de 10!')
    }
}

function decrement() {
    if (currentNumber != 0) {
        currentNumber--;
        currentNumberWrapper.innerHTML = currentNumber;
    } else {
        console.log('Valores negativos não são permitidos!')
    }
}