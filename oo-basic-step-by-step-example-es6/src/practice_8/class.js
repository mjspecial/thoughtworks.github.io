function Class(number) {
    this.number = number;
    this.getDisplayName = function () {
        return "Class " + this.number;
    };
    this.assignLeader = function (student) {
        if (student.klass.number === this.number){
            this.leader = student;
        }
    }
}

module.exports = Class;
