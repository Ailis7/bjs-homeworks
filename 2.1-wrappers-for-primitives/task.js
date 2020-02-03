"use strict";
function calculateMortgage() {
  let percent = window.percent.value;
  let contribution = window.contribution.value;
  let amount = window.amount.value;
  let date = window.date.value;

  let result = calculateTotalMortgage(percent, contribution, amount, date);
  let span = window.mortageResult;
  span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    percent = parseFloat(percent);
    contribution = parseFloat(contribution);
    amount = parseFloat(amount);
    let check = {"Процентная ставка": percent, "Начальный взнос": contribution, "Общая стоимость": amount};
    for (let prop in check) {
        if (check[prop] === Infinity || Number.isNaN(check[prop]) === true) {
            return `Параметр ${prop} содержит неправильное значение ${check[prop]}`
        }
    }



  let totalAmount = percent + contribution + amount;
  // код для задачи №1 писать здесь
  return totalAmount;
}

function sayHello() {
  let name = window.personName.value;
  let greeting = getGreeting(name);
  let span = window.helloResult;
  span.textContent = greeting;
}

function getGreeting(name) {
  // код для задачи №2 писать здесь
  //return greeting;
}
let arr = 11 / 0;
if (arr == Infinity) {
    console.log(`ghbdtn`)
}
console.log(isFinite(arr));
console.log(arr);


