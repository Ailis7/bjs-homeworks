class Weapon {
  constructor(name) {
    this.name = name;
  }
  takeDamage(damage) {
    this.durability = this.durability - damage;
    this.durability = this.durability < 0 ? 0 : this.durability;
  }
  getDamage() {
    if (this.durability === 0) {
      return 0;
    } else if (this.durability < this.originalDurability * 0.3) {
      return this.attack / 2;
    } else {
      return this.attack;
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

class Sword extends Weapon {
  constructor(name) {
    super(name);
    this.attack = 25;
    this.durability = 500;
    this.range = 1;
    this.originalDurability = this.durability;
  }
}
class Ax extends Sword {
  constructor(name) {
    super(name);
    this.attack = 27;
    this.durability = 1000;
    this.originalDurability = 1000;
  }
}
class Arm extends Weapon {
  constructor(name) {
    super(name);
    this.attack = 1;
    this.durability = Infinity;
    this.range = 1;
    this.originalDurability = this.durability;
  }
}
class Bow extends Weapon {
  constructor(name) {
    super(name);
    this.attack = 10;
    this.durability = 200;
    this.range = 3;
    this.originalDurability = this.durability;
  }
}
class LongBow extends Bow {
  constructor(name) {
    super(name);
    this.attack = 15;
    this.range = 4;
  }
}
class Knife extends Weapon {
  constructor(name) {
    super(name);
    this.attack = 5;
    this.durability = 300;
    this.range = 1;
    this.originalDurability = this.durability;
  }
}
class Staff extends Weapon {
  constructor(name) {
    super(name);
    this.attack = 8;
    this.durability = 300;
    this.range = 2;
    this.originalDurability = this.durability;
  }
}
class StormStaff extends Staff {
  constructor(name) {
    super(name);
    this.attack = 10;
    this.range = 3;
  }
}

const sword = new Sword("Меч");
const arm = new Arm("Рука");
const bow = new Bow("Лук");
const knife = new Knife("Нож");
const staff = new Staff("Посох");

const longBow = new LongBow("Длинный лук");
const ax = new Ax("Секира");
const stormStaff = new StormStaff("Посох Бури");

longBow.takeDamage(170);
console.log(longBow);
console.log(longBow.getDamage());

//stormStaff.takeDamage(500);
//superSword.takeDamage(900);
// console.log(sword);
// console.log(arm);
// console.log(bow);
// console.log(knife);
// console.log(staff);
// console.log(longBow);
// console.log(ax);
// console.log(stormStaff);
// console.log(stormStaff.getDamage());
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
// console.log(log);
// console.log(log.getName());
// // log.addGrade(2, "algebra");
// // log.addGrade(4, "algebra");
// // log.addGrade(5, "geometry");
// // log.addGrade(4, "geometry");

// console.log(log.getAverageBySubject("geometry")); // 4.5
// console.log(log.getAverageBySubject("algebra")); // 3
// console.log(log.getAverageBySubject("math")); // 0

// console.log(log.getTotalAverage());
// let a = {a: 1}
// for (let prop in a) {
//   console.log(prop, a[prop]);
// }
