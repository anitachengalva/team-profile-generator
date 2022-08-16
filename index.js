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

function welcome() {
  console.log("\n" + "Welcome! Let's Build Your Team." + "\n");
  start();
}

function addEmployee() {
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
            case "Engineer":
            case "Intern":
            case "Manager":
        }
    }
  )

  // you need to build out all of the questions in a chain. starting with the manager, and then continuing to engineer and intern questions
}

//   function addTeam() {}

//   function addIntern() {}

//   function addEngineer() {}
//   addManager();
