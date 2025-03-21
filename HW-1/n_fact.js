// Fibonacci
const fibonacci = (n) => {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  
  console.log(fibonacci(5));

// Factorial
  const factorial = (n) => {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };
  
  console.log(factorial(5)); 