// javascript
// utilize node, jest, and inquirer


const Manager = require("./manager.js");
const Engineer = require("./engineer.js");
const Intern = require("./lib/intern.js");

const inquirer = require("inquirer");

var questions = [
    {
        type:"input",
        message:"What is the manager's name?",
        name:"managerName"
    },
    {
        type:"input",
        message:"What is the manager's email?",
        name: "managerEmail",
    },
    {
        type:"confirm",
        message:"would you like to add an employee or intern at this time?",
        name:"addEmployee"
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
