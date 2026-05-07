// ================================
// TASK 2
// Closures & Arrow Functions
// ================================


// створюю функцію-лічильник
// внутрішня функція "пам’ятає" значення start

function createCounter(start) {

    return function() {

        console.log("Current count:", start);

        start++;
    };
}



// перевіряю як працює counter

const counter1 = createCounter(5);

counter1();
counter1();
counter1();



// така сама логіка але через arrow function

function createArrowCounter(start) {

    return () => {

        console.log("Arrow count:", start);

        start++;
    };
}



// перевіряю arrow counter

const counter2 = createArrowCounter(10);

counter2();
counter2();
counter2();



// closure пам’ятає змінну навіть після завершення зовнішньої функції

console.log("Counters still remember values");