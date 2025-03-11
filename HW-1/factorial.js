function factorial(n) {
    return fact_iter(1, 1, n);
}

function fact_iter(product, counter, max_count) {
    return counter > max_count
        ? product // if true execute
        : fact_iter(product * counter, counter + 1, max_count); // if false execute
}

console.log(factorial(5)); // Output: 120

/* Syntax
<boolean> ? action : action;
           if true   if false
*/