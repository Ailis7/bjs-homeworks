"use strict";
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
    //Далее вычесления
    let totalReturnSum = amount - contribution;
    let today = new Date();
    let creditMonth = (date.getFullYear() - today.getFullYear()) * 12 + (date.getMonth() - today.getMonth());
    let percentPerMonth = percent / 100 / 12;
    let monthPayment = totalReturnSum * (percentPerMonth + percentPerMonth / (((1 + percentPerMonth) ** creditMonth) - 1));
    let totalAmount = monthPayment * creditMonth;
    totalAmount = totalAmount.toFixed(2);
    return totalAmount;
}

function getGreeting(name) {
  // код для задачи №2 писать здесь
  //return greeting;
}
