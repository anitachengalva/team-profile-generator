// utilize node, jest, and inquirer
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

const Manager = require("./manager.js");
const Engineer = require("./engineer.js");
const Intern = require("./lib/intern.js");

const render = require("./src/templateBuilder");

let employees = [];
let idArray = [];

function addEmployee() {
console.log("\n" + "Welcome! Let's Build Your Team." + "\n");
  inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "number",
      message: "What is your ID#?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "list",
      message: "What is your role?",
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
                        message: "What is your office number?",
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
                        message: "What is your GitHub?",
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
        }
    }
  )

  // you need to build out all of the questions in a chain. starting with the manager, and then continuing to engineer and intern questions
}

//   function addTeam() {}

//   function addIntern() {}

//   function addEngineer() {}
//   addManager();
