const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    }

    getRole() {
        return this.role
    }

    getSchool() {
        return this.School;
    }
}

module.exports = Intern;