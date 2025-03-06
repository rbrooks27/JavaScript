// JavaScript

// 1. Variable Declaration
        // Using var (function-scoped, avoid in modern JS)
        var x;

        // Using let (block-scoped, recommended)
        let y;

        // Assigning values
        x = 5;
        y = 6;
        let z = x + y; 

// 2. Printing Output
        console.log(z); // Prints 11
    
// 3. Data Types
        /* ---- 1. String ---- */
        let str = String("Hello World");  // Explicit Declaration
        var str2 = "John Doe";            // Type Inference

        /* ---- 2. Number (Integers & Floats) ---- */
        var weight = Number(10);          // Explicit Declaration
        let age = 10;                     // Type Inference
        let payment = Number(25.60);       // Explicit Declaration
        var rent = 1570.89;               // Type Inference

        /* ---- 3. Boolean ---- */
        let myBoolean = true;             // Type Inference
        var did_you_win = Boolean(true);  // Explicit Declaration

        /* ---- 4. BigInt ---- */
        let myBigInt = 9007199254740991n;  // 'n' denotes a BigInt
        var myBank_account = 98499687578582895n;

        /* ---- 5. Undefined ---- */
        let myUndefined; // No value assigned

        /* ---- 6. Null ---- */
        let myNull = null; // Intentional empty value

        /* ---- 7. Symbol ---- */
        let mySymbol = Symbol("unique");

        /* ---- 8. Object ---- */
        let myObject = { name: "Alice", age: 25 };
        console.log(myObject)
        
        const car = {
            type:"Fiat", 
            model:"500", 
            color:"white"
        };
        console.log(car)

            // Creating object first then adding properties
            let person = {};
            person.firstName = "John";
            person.lastName = "Doe";
            person.age = 50;
            person.eyeColor = "blue";

            console.log(person)
    
// 4. Checking Data Types
        console.log(typeof age);    // "number"
        console.log(typeof weight); // "number"
        console.log(typeof myBigInt); // "bigint"
        console.log(typeof mySymbol); // "symbol"
        console.log(typeof myObject); // "object"
        console.log(typeof myUndefined); // "undefined"
        console.log(typeof myNull); // "object" (JavaScript quirk)
// 5. JavaScript Operators
        let c = 2;
        let v = 4;
        let n = 10;

        /* ---- 1. Addition ---- */
        let sum = c + v;
        console.log(sum); // 6

        /* ---- 2. Subtraction ---- */
        let difference = n - c; 
        console.log(difference); // 8

        /* ---- 3. Multiplication ---- */
        let product = c * v * n;
        console.log(product); // 80
        
        /* ---- 4. Division ---- */
        let quotient = n / c; 
        console.log(quotient); // 5

        /* ---- 5. Modulo ---- */
        let modulo = n % c; 
        console.log(modulo); // 0
// 6. Const 
        const days_in_year = 365.25;
        console.log(days_in_year);
        // days_in_year = 366;  // can't do this
    
// 7. Dollar Sign $
        // Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:
            let $ = "Hello World";
            let $$$ = 2;
            let $myMoney = 5; 
            console.log($); // Output: Helloe World
            console.log($$$); // Output: 2
            console.log($myMoney); // Output: 5

        

