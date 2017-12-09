const Person = require("../../src/practice_4/person.js");

function Worker(name, age) {
    Person.call(this, name, age);
    let person = new Person(name, age);
    this.introduce = function () {
        return person.introduce() + " I am a Worker. I have a job."
    }
}

module.exports = Worker;
