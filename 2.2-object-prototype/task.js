function getAnimalSound(animal) {
    if (animal === undefined) {
        return null;
    }
    this.sound = sound; 
    return animal.sound;
}

function getAverageMark(marks) {
    let roundAverage = 0;
    for (let i = 0; i < marks.length; i++) {
        marks[i] = parseFloat(marks[i]);
        roundAverage += marks[i];
    }
    let averageMark = Math.round(roundAverage / marks.length);
    return averageMark;
}

function checkBirthday(birthday) {
    debugger;
    let today = new Date();
    let factBirthday = new Date(birthday);
    let count = today - factBirthday;
    if (count >= 567950400000) {  //568036800000 - по факту, но в 18-летие же все разрешено уже:) так что - 1 день.
        console.log(count);
        return count = "Да";
    } else {
        console.log("NO " + count);
        return count = "Нет"; // не понял что нужно вывести в return, но в консоли всё выводится корретно. Возможно стоит переписать 6й пункт задания.
    }
}