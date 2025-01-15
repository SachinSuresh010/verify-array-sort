# verify-array-sort

This Node.js package provides a function to check if an array is sorted in ascending or descending order.

## Installation

```bash
npm install verify-array-sort
```
## Usage

# Import using require

```bash
const isSorted = require('verify-array-sort');
```

# Import using import
```bash
import isSorted from 'verify-array-sort'
```

```bash
// Check if an array of numbers is sorted in ascending order
const numbers = [1, 2, 3, 4, 5];
console.log(isSorted(numbers, 'ascending')); // Output: true

// Check if an array of numbers is sorted in descending order
const numbersDesc = [5, 4, 3, 2, 1];
console.log(isSorted(numbersDesc, 'descending')); // Output: true

// Check if an array of strings is sorted in ascending order (lexicographically)
const strings = ['apple', 'banana', 'cherry'];
console.log(isSorted(strings, 'ascending')); // Output: true

// Check if an array of dates is sorted in ascending order
const dates = [new Date('2023-01-01'), new Date('2023-02-01'), new Date('2023-03-01')];
console.log(isSorted(dates, 'ascending')); // Output: true

// Example with unsorted array
const unsortedNumbers = [1, 3, 2, 4];
console.log(isSorted(unsortedNumbers, 'ascending')); // Output: false 
```

# API

**isSorted(arr, order)**

- arr: The array to check.
- order: The order to check for ('ascending' or 'descending').

Returns:

- true if the array is sorted according to the specified order.
- false otherwise

# Supported Data Types

- Numbers
- Strings
- Dates

# Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

# License

This project is licensed under the MIT License - see the LICENSE file for details.