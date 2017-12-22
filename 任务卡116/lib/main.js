"use strict"

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
        addStudent(input);
    }else if(num == 2) {
        printScore();
    }else if(num == 3) {
        return null;
    }

}

//马娟,201514620224,汉,15网络2,数学:100,语文:99,英语:98,编程:97   冒号要与切割的冒号的中英文的输入时相同的
//刘林,201514620222,汉,15网络2,数学:90,语文:89,英语:88,编程:87
function addStudent(input) {
    var infro = require('cli-interact').question("请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：");
    var stuInfro = infro.split(',');
    if(stuInfro.length !==8) {
        console.log('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）\n\n');
        addStudent();
    }else {
        let sum = 0;
        for(var i = 4; i < 8; i++) {
            sum += parseFloat(stuInfro[i].split(':')[1]);
        }
        let student = {};
        student["name"] = stuInfro[0];
        student["id"] = stuInfro[1];
        student["nation"] = stuInfro[2];
        student["grade"] = stuInfro[3];
        student["math"] = stuInfro[4].split(':')[1];
        student["chinese"] = stuInfro[5].split(':')[1];
        student["english"] = stuInfro[6].split(':')[1];
        student["programme"] = stuInfro[7].split(':')[1];
        student["total"] = parseFloat(sum);
        student["averge"] = parseFloat(sum/4);
        allStudent.push(student);
        console.log("学生" +stuInfro[0]+ "的成绩被添加\n\n");
        main();
    }

}


function printScore() {
    var infromation = require('cli-interact').question("请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：");
    var stuNum = infromation.split(',');
    if(isNaN(stuNum[0])) {
        console.log("请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...）\n\n");
        printScore();
    }else {
        console.log("成绩单\n姓名|数学|语文|英语|编程|平均分|总分");
        console.log("========================");
        let sum_middle = [];
        let number ;
        for(var i = 0; i < stuNum.length; i++) {
            let arr = stuNum[i];
            for(var j=0; j<allStudent.length; j++) {
                if(allStudent[j]["id"] == arr) {
                    number = j;
                }
            }
            if(number == undefined) {
                break;
            }
            let student = allStudent[number];
            let str = '';
            str = student["name"] +' | '+
                    student["math"] + ' | '+
                    student["chinese"] + ' | '+
                    student["english"] + ' | '+
                    student["programme"] + ' | '+
                    student["averge"] + ' | '+
                    student["total"] + '\n';
            console.log(str);
            sum_middle.push(student["total"]);
        }
        console.log("========================");

        var sum_total = 0;
        for(var j = 0; j < allStudent.length; j++) {
            sum_total += parseFloat(allStudent[j].total);
        }
        var sum_averge = 0;
        sum_averge = parseFloat(sum_total/allStudent.length);
        console.log("全班总分平均数：" + sum_averge);

        var middle = 0;
        if(sum_middle.length % 2 == 0) {
             middle = (parseFloat(sum_middle[sum_middle.length / 2])+ parseFloat(sum_middle[sum_middle.length / 2 - 1]))/2;
        }else {
            middle = sum_middle[parseInt(sum_middle.length/2)];
        }
        console.log("全班总分中位数：" + middle +'\n');
    }

    main();
}

module.exports.main = main;
module.exports.addStudent = addStudent;
module.exports.printScore = printScore;