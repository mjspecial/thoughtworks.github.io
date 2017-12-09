function Class(number) {
    this.number = number;
    this.getDisplayName = function () {
        return "Class " + this.number;
    };
    this.assignLeader = function (student) {
        if (student.klass.number === this.number){
            this.leader = student;
        }else {
            console.log("It is not one of us.");
        }
    };
    this.appendMember = function (student) {
        if (student.klass.number === undefined) {
            console.log("It is not one of us");
        }else{
            student.klass = this;
        }
    };
}

module.exports = Class;
