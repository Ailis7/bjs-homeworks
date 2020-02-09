class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.originalDurability = durability;
  }
  takeDamage(damage) {
    this.durability = this.durability - damage;
    this.durability = this.durability < 0 ? 0 : this.durability;
    this.getDamage();
  }
  getDamage() {
    if (this.durability === 0) {
      this.attack = 0;
    } else if (this.durability < this.originalDurability * 0.3) {
      this.attack = this.attack / 2;
    }
  }
  isBroken() {
    if (this.durability === 0) {
      return true;
    } else {
      return false;
    }
  }
}

class Sword extends Weapon {}
class Ax extends Sword {}
class Arm extends Weapon {}
class Bow extends Weapon {}
class LongBow extends Bow {}
class Knife extends Weapon {}
class Staff extends Weapon {}
class StormStaff extends Staff {}

const sword = new Sword("Меч", 25, 500, 1);
const arm = new Arm("Рука", 1, Infinity, 1);
const bow = new Bow("Лук", 10, 200, 3);
// console.log(bow.name); // Лук
// console.log(bow.attack); // 10
// console.log(bow.durability); // 200
// console.log(bow.range); // 3
const knife = new Knife("Нож", 5, 300, 1);
const staff = new Staff("Посох", 8, 300, 2);

const longBow = new LongBow("Длинный лук", 15, bow.durability, 4);
const ax = new Ax("Секира", 27, 800, sword.range);
const stormStaff = new StormStaff("Посох Бури", 10, staff.durability, 3);
//console.log(stormStaff.isBroken())
// sword.takeDamage(450);
// stormStaff.takeDamage(500);
// console.log(sword);
// console.log(arm);
// console.log(bow);
// console.log(knife);
// console.log(staff);
// console.log(longBow);
// console.log(ax);
// console.log(stormStaff);
// console.log(stormStaff.isBroken());
// console.log(staff.isBroken());

class StudentLog {
  constructor(name) {
    this.name = name;
    this.subjectArr = {};
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (grade > 0 && grade < 6) {
      if (this.subjectArr[subject] === undefined) {
        this.subjectArr[subject] = [grade];
      } else {
        this.subjectArr[subject].push(grade);
      }
      return grade;
    } else {
      return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5`;
    }
  }

  getAverageBySubject(subject) {
    let subjectArr = this.subjectArr[subject];
    subject = 0;
    if (subjectArr === undefined) {
      return 0;
    }
    for (let i = 0; i < subjectArr.length; i++) {
      subject += subjectArr[i];
    }
    return subject / subjectArr.length;
  }

  getTotalAverage() {
    if (this.subjectArr === {}) {
      return 0;
    }
    let total = 0,
      totalStack = 0;
    for (let prop in this.subjectArr) {
      for (let i = 0; i < this.subjectArr[prop].length; i++) {
        total += this.subjectArr[prop][i];
        totalStack++;
      }
    }
    if (Number.isNaN(total / totalStack) === true) {
      return 0;
    } else {
      return total / totalStack;
    }
  }
}

const log = new StudentLog("Олег Никифоров'");
console.log(log);
console.log(log.getName());
// log.addGrade(2, "algebra");
// log.addGrade(4, "algebra");
// log.addGrade(5, "geometry");
// log.addGrade(4, "geometry");

console.log(log.getAverageBySubject("geometry")); // 4.5
console.log(log.getAverageBySubject("algebra")); // 3
console.log(log.getAverageBySubject("math")); // 0

console.log(log.getTotalAverage());
// let a = {a: 1}
// for (let prop in a) {
//   console.log(prop, a[prop]);
// }
