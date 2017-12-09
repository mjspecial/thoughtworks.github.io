function Person (name, age) {
    var obj = {};
    obj.name = name;
    obj.age = age;
    obj.introduce = function () {
        return "My name is " + this.name + ". I am " + this.age + " years old.";
    };
    return obj;
}

module.exports = Person;
