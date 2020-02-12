function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

//sleep(4500)
//console.log("Привет")
// function sum(...args) {
//     // Замедление на половину секунды.
//     sleep(500); // Можно использовать другое значение замедления.
//     return args.reduce((sum, arg) => {
//         return sum += +arg;
//     }, 0);
// }

// console.log(sum(1, 2))

//=======
function logArgs() {
    console.log(Array.from(arguments).join(', '));
}
logArgs(1, 2, 3); // 1, 2, 3

function execute(func) {
    func;
}

function hello() {
    console.log('Привет, я функция!');
}
execute(hello());
execute(function () {
    console.log('Я функциональное выражение!');
});
//==================

function compareArrays( arr1, arr2 ) {
    function condition(element, index) {
        console.log(arr1[index], arr2[index], element);
        return arr1[index] === arr2[index];
    }
    return arr1.every(condition) && arr2.every(condition);
}
// console.log(compareArrays([8, 9], [6])); // false, разные значения
// console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
// console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
// console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
// console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true
// compareArrays([8, 9], [6]); // false, разные значения
// compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
// compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
// compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
// compareArrays([8, 1, 2], [8, 1, 2]); // true

function memorize(...args) {
    let results = [];

    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}