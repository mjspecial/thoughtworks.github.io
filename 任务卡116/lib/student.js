"use strict"

class student {
    constructor(id, name, nation, grade, chinese, math, english, programme, total, averge) {
        this.id = id;
        this.name = name;
        this.nation = nation;
        this.grade = grade;
        this.chinese = chinese;
        this.math = math;
        this.english = english;
        this.programme = programme;
        this.total = total;
        this.averge = averge;
    }
}

module.exports = student;