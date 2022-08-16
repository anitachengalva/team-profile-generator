const Employee = require("./lib/employee");

// Intern is a subclass of employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        // updates role from default Employee to Intern
        return "Intern";
    }
}

module.exports = Intern;