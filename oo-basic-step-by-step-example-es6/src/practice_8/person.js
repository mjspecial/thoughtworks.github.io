function Person (id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.introduce = function () {
        return "My name is " + this.name + ". I am " + this.age + " years old.";
    };
}

module.exports = Person;
