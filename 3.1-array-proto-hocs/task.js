"use strict";
function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function compareArrays(arr1, arr2) {
  function condition(element, index) {
    //console.log(arr1[index], arr2[index], element);
    return arr1[index] === arr2[index];
  }
  return arr1.every(condition) && arr2.every(condition);
}

const sum = function sumary(a, b) {
  return a + b;
};

function memorize(fn, limit, results = []) {
  //console.log(fn);
  //console.log(limit)

  return function() {
    let findIndex = results.length;
    if (results.find(arr => compareArrays(arr.arg, [...arguments]))) {
      return results[
        results.findIndex(arr => compareArrays(arr.arg, [...arguments]))
      ].result;
    }
    if (results.length === 5) {
      results.splice(0, 1);
    }
    results[results.length] = {
      arg: [...arguments],
      result: sum(...arguments)
    };

    //console.log(limit);
    let a = JSON.stringify(results);
    console.table(a);
    return results;
  };
}
const mSum = memorize(sum, 5);

mSum(1, 2);
mSum(3, 6);
console.log(mSum(1, 2) === 3);
mSum(1, 2);
mSum(1, 9);
mSum(4, 7);
mSum(8, 9);
mSum(7, 8);
mSum(4, 7);

// let a = [1, 2, 3, 4]
// a.splice(0, 1);

// //sleep(500); // Можно использовать другое значение замедления.
// return limit.reduce((fn, limit) => {
//     return fn += +limit;
// }, 0);
//}
//console.log(mSum(100, 2, 3, 4, 6));

// let a = {1: 9, 2: 3};
// for (let prop in a) {
//     console.log(a[prop])
// }

// let array = [-1, -2, 3, 4];
// function nana(number) {
//         if (number > 0) {
//         return true;
//     }
//     return false;
// }

// console.log(array.find(array => nana(array)));
