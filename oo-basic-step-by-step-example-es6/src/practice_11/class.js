const Student = require("../../src/practice_11/student");
const Teacher = require("../../src/practice_11/teacher");

function judge(teacher, student, number, str) {
    if (teacher !== undefined) {
        let arr = [];
        for (let data of teacher.klasses) {
            arr.push(data.number);
        }
        let index = arr.indexOf(number);
        if (index !== -1){
            console.log( "I am " + teacher.name + ". I know " + student.name + str + "Class " + arr[index] + ".");
        }
    }
}
