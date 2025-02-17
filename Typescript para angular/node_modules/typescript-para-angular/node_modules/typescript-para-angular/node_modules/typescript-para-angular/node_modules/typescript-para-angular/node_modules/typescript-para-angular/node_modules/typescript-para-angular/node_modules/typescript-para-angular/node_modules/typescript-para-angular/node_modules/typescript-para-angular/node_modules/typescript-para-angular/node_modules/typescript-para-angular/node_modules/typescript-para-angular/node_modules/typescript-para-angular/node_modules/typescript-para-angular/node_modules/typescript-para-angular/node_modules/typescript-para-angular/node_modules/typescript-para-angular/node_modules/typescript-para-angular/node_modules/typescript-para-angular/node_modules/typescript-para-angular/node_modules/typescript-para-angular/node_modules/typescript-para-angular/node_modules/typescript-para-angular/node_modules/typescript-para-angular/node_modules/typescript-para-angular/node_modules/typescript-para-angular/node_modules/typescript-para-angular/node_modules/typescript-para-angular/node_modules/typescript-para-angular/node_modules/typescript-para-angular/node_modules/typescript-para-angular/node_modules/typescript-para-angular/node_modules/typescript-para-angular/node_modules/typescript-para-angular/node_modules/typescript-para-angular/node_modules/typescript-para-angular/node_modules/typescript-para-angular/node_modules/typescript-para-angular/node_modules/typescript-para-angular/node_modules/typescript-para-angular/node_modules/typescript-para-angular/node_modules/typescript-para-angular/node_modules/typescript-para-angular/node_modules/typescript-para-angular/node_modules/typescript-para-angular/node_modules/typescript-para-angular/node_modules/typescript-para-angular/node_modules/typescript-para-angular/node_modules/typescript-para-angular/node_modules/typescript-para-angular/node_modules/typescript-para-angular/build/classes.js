"use strict";
class Character {
    constructor(stregth, Skill) {
        this.stregth = stregth;
        this.Skill = Skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character(10, 98);
console.log(p1.attack);
