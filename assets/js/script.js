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
    sum = 0;

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
    sum = 0;

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

let array = [1, 2, 3, 4, 5, 6, 7];

// sum(array);

// sumAF(array)





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