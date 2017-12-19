"use strict"

module.exports = main;
let student = require("../lib/student");

let allStudent = [];

function main() {
    console.log(
        '1. 添加学生\n'+
        '2. 生成成绩单\n'+
        '3. 退出\n'
    );

    var query = require('cli-interact').question;
    var num = query('请输入你的选择（1~3）：');

    if(num == 1) {
        addStudent();
    }else if(num == 2) {
        printScore();
    }else if(num == 3) {
        exit();
    }

    main();
}

//马娟,201514620224,汉,15网络2,数学：100,语文：99,英语：98,编程：97
function addStudent() {
    var infro = require('cli-interact').question("请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：");
    var stuInfro = infro.split(',');
    if(stuInfro.length !==8 && stuInfro[4].split(':') == -1) {
        console.log('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）');
        addStudent();
    }else {
        let sum = 0
        for(var i = 4; i < 8; i++) {
            sum += stuInfro[i].split(',')[1];
        }
        let student = {};
        student["name"] = stuInfro[0];
        student["id"] = stuInfro[1];
        student["nation"] = stuInfro[2];
        student["grade"] = stuInfro[3];
        student["math"] = stuInfro[4].split(',')[1];
        student["chinese"] = stuInfro[5].split(',')[1];
        student["english"] = stuInfro[6].split(',')[1];
        student["programme"] = stuInfro[7].split(',')[1];
        student["total"] = sum;
        student["averge"] = sum/4;
        allStudent.push(student);
        console.log("学生" +stuInfro[0]+ "的成绩被添加\n");
    }

}


function printScore() {
    var infromation = require('cli-interact').question("请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：");
    if(infromation.split(',') == -1) {
        console.log()
    }
}