
function ekub(a, b) {
    while (b !== 0) {
        let qoldiq = a % b;

        a = b;
        b = qoldiq;
    }

    return a;
}

console.log(ekub(48, 18));   // 6
console.log(ekub(17, 5));    // 1
console.log(ekub(100, 25));  // 25
console.log(ekub(7, 7));     // 7
console.log(ekub(1, 1));     // 1
