function calculateQuadraticEquation() {
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a, b, c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = " + result;
}

function getResult(a, b, c) {
    let d = Math.pow(b, 2) - 4 * a * c;
    let sqrt = [];
    if (d >= 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        sqrt = (d == 0) ? [x1] : [x1, x2];
    }
    return sqrt;
}

function calculateAverageRating() {
    let marks = window.marks.value.split("").map(Number).filter((n) => !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks) {
    if (marks.length > 5) {
        console.log("Оценок больше 5-ти");
        marks = marks.slice(0, 5);
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum = marks[i] + sum;
    }
    return sum / marks.length;
}

function calculateDrinkTask() {
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
    let stringResult;
    if (dateOfBirthday.getFullYear() < 2003) {
        stringResult = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        stringResult = `Сожалею, ${name}, но я не могу вам продать алкоголь. 
        Зато могу предложить вам замечательный клюквенный компот!`;
    }
    return stringResult;
}