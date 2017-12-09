const Person = require("../../src/practice_7/person.js");

function Teacher(name, age, klass) {
    let str = "";
    Person.call(this, name, age);
    let person = new Person(name, age);
    this.klass = klass;
    this.introduce = function () {
        if (this.klass === undefined) {
            return person.introduce() + " I am a Teacher. I teach No Class."
        }else {
            return person.introduce() + " I am a Teacher. I teach Class " + this.klass.number + "."
        }
    };
    this.introduceWith = function (student) {
        if (student.klass.number !== this.klass.number) {
            str = " don't";
        }
        return person.introduce() + " I am a Teacher. I" + str + " teach " + student.name + ".";
    }
}


module.exports = Teacher;
