function elementQidir(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }

    return -1;
}

console.log(elementQidir([10, 20, 30], 20)); // 1

console.log(elementQidir([10, 20, 30], 5)); // -1

console.log(elementQidir([5, 5, 10], 5)); // 0

console.log(elementQidir([], 10)); // -1

console.log(elementQidir([100], 100)); // 0
