const fs = require('fs');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

function render(employees){
    let cardStack = "";

    for(employee of employees){
        cardStack+=
        `
        <div class="card">
            <h2 class="card-name">${employee.name}</h2>
            <h3 class="card-role">${employee.role}</h3>
            <ul class="card-details">Employee ID: ${employee.id}</ul>
            ${employee.officeNumber?`<ul class="card-details">Office Number: ${employee.officeNumber}</ul>`:""}
            <ul class="card-details">Email: <a href="mailto:${employee.email}">${employee.email}</a></ul>
            ${/**add schools and other stuff here */""}
        </div>
        `
    }

    let finalHTML = 
    `
    <!DOCTYPE html>

<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>

    <header>
        <h1>My Team </h1>
        <h2>Employee Profile Cards</h2>
    </header>

    <body class="main-container">
        <div class="cards">
            ${cardStack}
        </div>
        <footer>
            <h4>2022 Anita Chengalva</h4>
        </footer>
    <script src="index.js"></script>
    </body>
</html>
    `

fs.writeFile('./dist/index.html', finalHTML,function(err){
    if (err) throw err;
})

}

module.exports = render;