// Use loops for or while

function binarySearchNonFunctional(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        if (arr[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    
    return -1; // Not found
}

// Printing Outputs and Testing
const arr = [1, 3, 5, 7, 9, 11];
console.log(binarySearchNonFunctional(arr, 7)); // Output: 3

