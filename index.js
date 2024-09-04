/**
 * Check if array is sorted
 * @param {Array} arr Sort Array
 * @param {String} order ascending/descending
 * @returns 
 */
function isSorted(arr, order) {
    if (arr.length <= 1) {
        return true; // Empty or single element array is considered sorted
    }

    const compareFunction = (a, b) => {
        if (typeof a === "string" || typeof b === "string") {
            return a.localeCompare(b); // String comparison
        } else if (typeof a === "date" && typeof b === "date") {
            return a - b; // Date comparison
        } else {
            return a - b; // Number comparison (default)
        }
    };

    for (let i = 0; i < arr.length - 1; i++) {
        if (order === "ascending" && compareFunction(arr[i], arr[i + 1]) > 0) {
            return false;
        } else if (order === "descending" && compareFunction(arr[i], arr[i + 1]) < 0) {
            return false;
        }
    }
    return true;
}

module.exports = isSorted