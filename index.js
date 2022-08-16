// utilize node, jest, and inquirer
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const newManager = require("./lib/manager.js");
const newEngineer = require("./lib/engineer.js");
const newIntern = require("./lib/intern.js");

const render = require("./src/templateBuilder");

let employees = [];
let idArray = [];

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
                        newManager(name, id, email, officeNumber)
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
                        newEngineer(name, id, email, github)
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
                        newIntern(name, id, email, school)
                        addNewEmployee();
                    }
                )
                break
        }
    }
  )
}

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