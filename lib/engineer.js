const Employee = require("./employee");

// Engineer is a subclass of employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role="Engineer"
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