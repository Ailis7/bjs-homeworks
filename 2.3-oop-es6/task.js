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

const sword = new Weapon("Меч", 25, 500, 1);
const arm = new Weapon("Рука", 1, Infinity, 1);
const bow = new Weapon("Лук", 10, 200, 3);
const knife = new Weapon("Нож", 5, 300, 1);
const staff = new Weapon("Посох", 8, 300, 2);

const longBow = new Weapon("Длинный лук", 15, bow.durability, 4);
const ax = new Weapon("Секира", 27, 800, sword.range);
const stormStaff = new Weapon("Посох Бури", 10, staff.durability, 3);

sword.takeDamage(450);
stormStaff.takeDamage(500);
console.log(sword);
console.log(arm);
console.log(bow);
console.log(knife);
console.log(staff);
console.log(longBow);
console.log(ax);
console.log(stormStaff);
console.log(stormStaff.isBroken());
console.log(staff.isBroken());
