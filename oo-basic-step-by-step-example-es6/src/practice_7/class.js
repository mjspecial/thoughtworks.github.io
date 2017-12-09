function Class(number) {
    this.number = number;
    this.getDisplayName = function () {
        return "Class " + this.number;
    }
}

module.exports = Class;
