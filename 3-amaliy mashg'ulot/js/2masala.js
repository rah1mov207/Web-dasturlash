function qatnashganmi(matn, soz) {
    let kichikMatn = matn.toLowerCase();
    let kichikSoz = soz.toLowerCase();

    return kichikMatn.includes(kichikSoz);
}

console.log(qatnashganmi(
    "Bugun JavaScript darsida funksiya yozdik",
    "javascript"
)); // true

console.log(qatnashganmi("HTML va CSS", "php")); // false

console.log(qatnashganmi("Salom Dunyo", "SALOM")); // true

console.log(qatnashganmi("", "salom")); // false
