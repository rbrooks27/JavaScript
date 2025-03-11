/*
Fibonacci Equation:
    Fn = Fn-1 + Fn-2

Can be implemented using recursion 
*/


function fibonacci(n) {
    if (n <= 0) return 0; // base case
    if (n === 1) return 1; // base case
    return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
}

console.log(fibonacci(1)); // Output: 55

/* Functional Programming:


Loops:
    - No loops are allowed in functional programming
    - Use recursion instead

Side Effects:
    - No side effects
    - Side-Effect 1: Dependency 
        - function depends on extBlockNum being defined and initialized 
    - Side-Effect 2: External Code Modification
        - the variable extBlockNum is changed by running the method 
    - Side-Effect 3: Nondeterministic
        - Output of the function depends on external state, output not determined by function inputs.
    - Resolve
        - just don't do it, so don't use global variable etc.

Pure Functions:
    - Inputs of a function determine the output

State constructs:

Stateless:
    - only use immutables
    - use recursion
    - avoid side-effects
    - encapsulate unaviodable non-pure functions

Mutable Variables/ No Variables:
    - Block-scoping is let (mutable variable)
    - Function-scoping is var (mutable variable)
    - These make is not a full functional program
    - But the command const is immutable 

Arrow (=>) Operator
    - => is equal to function creating
    - Ex.
        const fibonacci = (n) => {
            if (n <= 1) return n;
            return fibonacci(n-1) + fibonacci(n-2);
        }
    - shorthand syntax for function
    - Several features of syntactic sugar:
    
*/