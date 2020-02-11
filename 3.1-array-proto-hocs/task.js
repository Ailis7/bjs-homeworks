function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

//sleep(4500)
//console.log("Привет")
function sum(...args) {
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

console.log(sum(1, 2))


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