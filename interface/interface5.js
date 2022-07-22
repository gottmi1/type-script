"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`${this.name}입니다1`);
    }
}
const person = new Person("jinwon");
person.hello();
