


function ikkiYigindi(arr, maqsad) {
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] === maqsad) {
                return [i, j];
            }

        }
    }

    return [];
}

console.log(ikkiYigindi([2, 7, 11, 15], 9)); // [0, 1]

console.log(ikkiYigindi([3, 2, 4], 6)); // [1, 2]

console.log(ikkiYigindi([1, 2], 10)); // []

console.log(ikkiYigindi([3, 3], 6)); // [0, 1]

console.log(ikkiYigindi([], 5)); // []
