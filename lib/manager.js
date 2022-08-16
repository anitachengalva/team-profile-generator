const Employee = require("./lib/employee");

// Manager is a subclass of employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        // updates role from default Employee to Manager
        return "Manager";
    }
}

module.exports = Manager;