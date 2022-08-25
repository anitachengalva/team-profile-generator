const Employee = require("./employee");

// Intern is a subclass of employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role="Intern"
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