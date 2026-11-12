


function anagrammi(a, b) {
    let soz1 = a.toLowerCase();
    let soz2 = b.toLowerCase();

    if (soz1.length !== soz2.length) {
        return false;
    }

    let harflar1 = soz1.split("").sort();
    let harflar2 = soz2.split("").sort();

    return harflar1.join("") === harflar2.join("");
}

console.log(anagrammi("Kitob", "bokit")); // true

console.log(anagrammi("olma", "olam")); // true

console.log(anagrammi("salom", "solaq")); // false

console.log(anagrammi("Java", "java")); // true

console.log(anagrammi("", "")); // true
