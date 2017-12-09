const Person = require("../../src/practice_10/person.js");
const Class = require("../../src/practice_10/class");

function Teacher(id, name, age, klasses) {
    let str = "";
    Person.call(this, id, name, age);
    let person = new Person(id, name, age);
    this.klasses = klasses;
    this.introduce = function () {
        if (this.klasses === undefined) {
            return person.introduce() + " I am a Teacher. I teach No Class."
        }else {
            let arr = [];
            for (let data of this.klasses){
                arr.push(data.number)
            }
            return person.introduce() + " I am a Teacher. I teach Class " + arr.join(", ") + "."
        }
    };
    this.introduceWith = function (student) {
        if (student.klass.number !== this.klass.number) {
            str = " don't";
        }
        return person.introduce() + " I am a Teacher. I" + str + " teach " + student.name + ".";
    }
}

let klasses = [new Class(2), new Class(3)];
const teacher = new Teacher(1, "Tom", 21, klasses);
console.log(teacher.introduce())
module.exports = Teacher;

