// ================================
// TASK 3
// Scope, Parameters, and this Binding
// ================================


// default parameter
// якщо ім’я не передали — буде Guest

function greetUser(name = "Guest") {

    console.log(`Hello, ${name}!`);
}


// перевіряю функцію

greetUser();

greetUser("Arisha");



// об’єкт з regular function
// тут this працює правильно

const userRegular = {

    name: "Arisha",

    sayHi: function() {

        console.log("Regular function:", this.name);
    }
};


userRegular.sayHi();



// об’єкт з arrow function
// arrow function не має власного this

const userArrow = {

    name: "Arisha",

    sayHi: () => {

        console.log("Arrow function:", this.name);
    }
};


userArrow.sayHi();



// var після циклу все ще існує

for (var i = 0; i < 3; i++) {

    console.log("var inside loop:", i);
}


console.log("var outside loop:", i);




// let працює тільки всередині блоку

for (let j = 0; j < 3; j++) {

    console.log("let inside loop:", j);
}



// тут буде помилка бо j недоступна поза циклом

try {

    console.log(j);

} catch (error) {

    console.log("Error with let:", error.message);
}
