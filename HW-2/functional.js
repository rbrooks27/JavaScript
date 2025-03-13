// Use recursion 

function binarySearchFunctional(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1; // Base case

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] > target) return binarySearchFunctional(arr, target, left, mid - 1);
    
    return binarySearchFunctional(arr, target, mid + 1, right);
}

// Printing Outputs and Testing
const arr = [1, 3, 5, 7, 9, 11];
console.log(binarySearchFunctional(arr, 7)); // Output: 3
