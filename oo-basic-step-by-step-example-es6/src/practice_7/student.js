const Person = require("../../src/practice_7/person.js");

function Student(name, age, klass) {
    Person.call(this, name, age);
    let person = new Person(name, age);
    this.klass = klass;
    this.introduce = function () {
        return person.introduce() + " I am a Student. I am at Class " + this.klass.number + "."
    }
}

module.exports = Student;
