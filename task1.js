// ================================
// TASK 1
// Function declarations vs expressions + hoisting
// ================================


// пробую викликати функцію ДО оголошення
// хочу подивитись як працює hoisting

try {
    console.log(
        getCalculation("area")("circle", 10)
    );
} catch (error) {
    console.log("Error before declarations:", error.message);
}


// function declaration
// declarations hoistяться повністю

function calculateArea(shape, value) {

    if (shape === "circle") {
        return Math.PI * value * value;
    }

    if (shape === "square") {
        return value * value;
    }

    return "Unknown shape";
}



// function expression
// expression НЕ працює до оголошення

const calculatePerimeter = function(shape, value) {

    if (shape === "circle") {
        return 2 * Math.PI * value;
    }

    if (shape === "square") {
        return 4 * value;
    }

    return "Unknown shape";
};



// higher-order function
// повертає іншу функцію

function getCalculation(type) {

    if (type === "area") {
        return calculateArea;
    }

    if (type === "perimeter") {
        return calculatePerimeter;
    }
}



// виклик після оголошень
// тут вже все має працювати нормально

console.log(
    getCalculation("area")("circle", 10)
);

console.log(
    getCalculation("perimeter")("square", 5)
);



// перевіряю які функції доступні

console.log(typeof calculateArea);

console.log(typeof calculatePerimeter);

console.log(typeof getCalculation);