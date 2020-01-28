function getResult(a, b, c = 0) {
    let D = Math.pow(b, 2) - 4 * a * c;
    let sqrt = {};
    if (D >= 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        sqrt = (D == 0) ? {roots: [x1], D} : {roots: [x1, x2], D};
    } else {
      sqrt = {D};
    }
    return sqrt;
}

function showSolutionsMessage(a, b, c) {
  let result = getResult(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

showSolutionsMessage(2, 4, 2);

function getAverageScore(data) {
  function average(subject) {
    let sum = 0;
    for (let i = 0; i < subject.length; i++) {
      sum += subject[i];
    }
    return sum / subject.length;
  }
  let averageMass = {}, subjectCount = 0, subjectAverage = 0;
  for (let prop in data) {
    averageMass[prop] = average(data[prop]);
    subjectAverage += average(data[prop]);
    subjectCount++
  }
  averageMass.average = subjectAverage / subjectCount;
  console.log(averageMass);
}

getAverageScore({
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  phusics: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4]
});

function getPersonData( secretData ) {
      let data = {};
      const search = function( man ) {
        for (let prop in man) {
          if (prop === "aaa") {
            if (man[prop] === 0) {
              data.firstName = "Эмилио";
            } else {
              data.firstName = "Родриго";
            }
          }

          if (prop === "bbb") {
            if (man[prop] === 0) {
              data.lastName = "Эмилио";
            } else {
              data.lastName = "Родриго";
            }
          }
        } 
      } 
      search(secretData); 
      return data;
    }
    
console.log( getPersonData({
  aaa: 0,
  bbb: 0
  }));
console.log( getPersonData({
  aaa: 1,
  bbb: 0
  }));
console.log( getPersonData({
  aaa: 0,
  bbb: 1
  }));
console.log( getPersonData({
  aaa: 1,
  bbb: 1
  }));