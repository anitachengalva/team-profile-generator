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

var questions = [
    {
        type:"input",
        message:"What is your name?",
        name:"employeeName"
    },
    {
        type:"number",
        message:"What is your ID#?",
        name:"employeeName"
    },
    {
        type:"input",
        message:"What is your email address?",
        name:"employeeEmail"
    },
    {
        type:"list",
        message:"What is your role?",
        name:"employeeRole",
        choices: ["Manager", "Engineer", "Intern"]
    }
]

inquirer.prompt(questions)//prompt takes an array of objects that contain your questions
.then(function(response){
    new Manager(response.managerName,response.managerEmail)

    if(addEmployee){
        inquirer.prompt({
            type:"list",
            message:"What kind of employee do you want to add?",
            choices:["Intern","Engineer","Manager","Standard Employee"],
            name:"choice"
        }).then(function(response){
            //so on and so forth for internquestions and engineerquestions
        })
    }
})
// you need to build out all of the questions in a chain. starting with the manager, and then continuing to engineer and intern questions
