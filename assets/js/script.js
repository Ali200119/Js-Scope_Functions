"use strict"

// Task1 --------------- Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin

// Regular function

function isDivided (n) {
    if (typeof n == "number") {
        if (n % 3 == 0 && n % 7 == 0) {
            console.log("Is divide");
        }
    
        else {
            console.log("Isn't divide");
        }
    }

    else {
        console.log("Please, enter the number");
    }
}

// Arrown function

let isDevidedAF = (n) => {
    if (typeof n == "number") {
        if (n % 3 == 0 && n % 7 == 0) {
            console.log("Is divide");
        }
    
        else {
            console.log("Isn't divide");
        }
    }

    else {
        console.log("Please, enter the number");
    }
}

// isDivided(21);

// isDevidedAF(84);





// Task2 --------------- Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir

// Regular function

function factorial(positive) {
    if (typeof positive == "number") {
        if (positive > 0) {
            let result = 1;

            for (let i = 1; i <= positive; i++) {
                result *= i;
            }

            console.log(result);
        }

        else if (positive < 0) {
            console.log("Please, enter positive number");
        }

        else {
            console.log(1);
        }
    }

    else {
        console.log("Please, enter the number");
    }
}

// Arrow function

let factorialAF = (positive) => {
    if (typeof positive == "number") {
        if (positive > 0) {
            let result = 1;

            for (let i = 1; i <= positive; i++) {
                result *= i;
            }

            console.log(result);
        }

        else if (positive < 0) {
            console.log("Please, enter positive number");
        }

        else {
            console.log(1);
        }
    }

    else {
        console.log("Please, enter the number");
    }
}

// factorial(5);

// factorialAF(4);





// Task3 --------------- Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin

// Regular function

function sum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (typeof element == "number") {
            if (element % 2 == 0) {
                sum += element ** 2;
            }
        }
        
        else {
            console.log(`${element} is not a number`);
        }
    }

    console.log(`The sum of the squares of the even numbers in the array is ${sum}`);
}

// Arrow function

let sumAF = (array) => {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (typeof element == "number") {
            if (element % 2 == 0) {
                sum += element ** 2;
            }
        }
        
        else {
            console.log(`${element} is not a number`);
        }
    }

    console.log(`The sum of the squares of the even numbers in the array is ${sum}`);
}

let array1 = [1, 2, 3, 4, 5, 6, 7];

// sum(array1);

// sumAF(array1);





// Task4 --------------- Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin

// Regular function

function authentication (email, password) {
    if (email == "cavid@code.edu.az" && password == "12345") {
        console.log("Login success");
    }

    else {
        console.log("Email or password is wrong");
    }
}

// Arrow function

let authenticationAF = (email, password) => {
    if (email == "cavid@code.edu.az" && password == "12345") {
        console.log("Login success");
    }

    else {
        console.log("Email or password is wrong");
    }
}

// authentication("cavid@code.edu.az", "12345");

// authenticationAF("cavid@code.edu.az", "12345");





// Task5 --------------- Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir

// Regular function

function sumOfOdds(array) {
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (typeof element == "number") {
            if (element % 2 != 0) {
                sum += element;
            }
        }
        
        else {
            console.log(`${element} is not a number`);
        }
    }

    console.log(`The sum of the odd numbers in the array is ${sum}`);
}

// Arrow function

let sumOfOddsAF = (array) => {
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (typeof element == "number") {
            if (element % 2 != 0) {
                sum += element;
            }
        }
        
        else {
            console.log(`${element} is not a number`);
        }
    }

    console.log(`The sum of the odd numbers in the array is ${sum}`);
}

let array2 = [78,7, 2, 1, 12, 23];

// sumOfOdds(array2);

// sumOfOddsAF(array2);





// Task6 --------------- Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir

// Regular function

function countOfEvens(array) {
    let count = 0;
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (typeof element == "number") {
            if (element % 2 == 0) {
                count++;
            }
        }
        
        else {
            console.log(`${element} is not a number`);
        }
    }

    console.log(`The count of the even numbers in the array is ${count}`);
}

// Arrow function

let countOfEvensAF = (array) => {
    let count = 0;
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (typeof element == "number") {
            if (element % 2 == 0) {
                count++;
            }
        }
        
        else {
            console.log(`${element} is not a number`);
        }
    }

    console.log(`The count of the even numbers in the array is ${count}`);
}

let array3 = [44,23, 43, 7, 8, 20, 17];

// countOfEvens(array3);

// countOfEvensAF(array3);