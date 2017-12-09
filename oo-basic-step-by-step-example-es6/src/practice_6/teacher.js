const Person = require("../../src/practice_6/person.js");

function Teacher(name, age, klass) {
    Person.call(this, name, age);
    let person = new Person(name, age);
    this.klass = klass;
    this.introduce = function () {
        if (this.klass === undefined) {
            return person.introduce() + " I am a Teacher. I teach No Class."
        }else {
            return person.introduce() + " I am a Teacher. I teach Class " + this.klass + "."
        }
    }
}

module.exports = Teacher;
