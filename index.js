// utilize node, jest, and inquirer
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const Employee = require("./lib/employee");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

// const render = require("./src/templateBuilder");

let employees = [];
// let idArray = [];

// prompts to gather employee information
function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the employee's name?",
      name: "name",
    },
    {
      type: "number",
      message: "What is their ID#?",
      name: "id",
    },
    {
      type: "input",
      message: "What is their email address?",
      name: "email",
    },
    {
      type: "list",
      message: "What is their role?",
      name: "role",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ]).then(
    // prompts vary depending on which role is selected
    // unique questions per role
    function ({ name, id, email, role }) {
        switch (role) {
            case "Manager":
                inquirer.prompt
                ([
                    {
                        type: "input",
                        message: "What is their office number?",
                        name: "officeNumber"
                    },
                ]).then (
                    function ({ officeNumber }) {
                        let manager = new Manager(name, id, email, officeNumber)
                        employees.push(manager)
                        addNewEmployee();
                    }
                )
                break
            case "Engineer":
                inquirer.prompt
                ([
                    {
                        type: "input",
                        message: "What is their GitHub?",
                        name: "github"
                    },
                ]).then (
                    function ({ github }) {
                        new Engineer(name, id, email, github)
                        addNewEmployee();
                    }
                )
                break
            case "Intern":
                inquirer.prompt
                ([
                    {
                        type: "input",
                        message: "What is their school?",
                        name: "school"
                    },
                ]).then (
                    function ({ school }) {
                        new Intern(name, id, email, school)
                        addNewEmployee();
                    }
                )
                break
        }
    }
  )
}

// loops back around if user wishes to add more employees
  function addNewEmployee() {
    inquirer.prompt ([
        {
            type: "confirm",
            message: "Would you like to add additional team members?",
            name: "addNewEmployee"
        },
    ]).then (
        function({ addNewEmployee }) {
            if (addNewEmployee) {
                addEmployee()
            } else {
                render();
            }
        }
    )
  }

addEmployee();