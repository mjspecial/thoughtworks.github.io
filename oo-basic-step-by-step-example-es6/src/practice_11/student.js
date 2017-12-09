const Person = require("../../src/practice_11/person.js");

function Student(id, name, age, klass) {
    Person.call(this, id, name, age);
    let person = new Person(id, name, age);
    this.klass = klass;
    this.introduce = function () {
        if (this.klass.leader !== undefined){
            return person.introduce() + " I am a Student. I am Leader of Class " + this.klass.number + "."
        }
        return person.introduce() + " I am a Student. I am at Class " + this.klass.number + "."
    }
}

module.exports = Student;
