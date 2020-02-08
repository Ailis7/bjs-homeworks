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

class Studentlog {
  constructor(name) {
    this.name = name;
    this.subjectArr = {};
  }

  getName() {
    return this.name;
  }



  addGrade(grade, subject) {
    if (grade > 0 && grade < 6) {

      return subjectArr;
    } else {
      return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5`;
    }
  }

  getAverageBySubject(subject) {
    return grade;
  }
}

const log = new Studentlog("Олег Никифоров'");
console.log(log);
console.log(log.getName());
console.log(log.addGrade(3, 'algebra'));
// 1

console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0

console.log(log.addGrade(4, 'algebra'));
// 1

console.log(log.addGrade(5, 'geometry'));
// 1

console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1
console.log(log.getAverageBySubject('algebra')); // 3