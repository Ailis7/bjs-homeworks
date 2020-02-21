"use strict";
function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function compareArrays(arr1, arr2) {
  function condition(element, index) {
    return arr1[index] === arr2[index];
  }
  return arr1.every(condition) && arr2.every(condition);
}

const sum = function sumary(...args) {
  sleep(500); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    //console.log(sum += +arg);
    return sum += +arg;
  }, 0);
};

function memorize(fn, limit, results = []) {

  return function() {
    if (results.find(arr => compareArrays(arr.arg, [...arguments]))) {
      return results[
        results.findIndex(arr => compareArrays(arr.arg, [...arguments]))
      ].result;
    }
    if (results.length === limit) {
      results.splice(0, 1);
    }
    results[results.length] = {
      arg: [...arguments],
      result: sum(...arguments)
    };

    //let a = JSON.stringify(results);
    //console.table(a);
    return results;
  };
}
const mSum = memorize(sum, 5);

// mSum(1, 2);
// mSum(3, 6);
// console.log(mSum(1, 2) === 3);
// mSum(1, 2);
// mSum(1, 9);
// mSum(4, 7);
// mSum(8, 9);
// mSum(7, 8);
// mSum(1, 2);
// mSum(4, 7);


let testArr = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4], [1, 2], [7, 8, 9] ];
function testCase(testFunction, array) {
  console.time(testFunction);
  for (let i = 0; i < 100; i++) {
    array.forEach(element => {testFunction(...element);
  });
  }
  console.timeEnd(testFunction);
};
testCase(mSum, testArr)
