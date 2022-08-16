const Employee = require("./lib/employee");

// Engineer is a subclass of employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        // updates role from default Employee to Engineer
        return "Engineer";
    }
}

module.exports = Engineer;