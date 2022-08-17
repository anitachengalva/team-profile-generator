const fs = require('fs');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

function render(employees){
    let cardStack = "";

    for(Manager of employees){
        cardStack+=
        `
        <div class="card">
            <h2 class="card-name">${employees.name}</h2>
            <h3 class="card-role">${employees.role}</h3>
            <ul class="card-details">Employee ID: ${employees.id}</ul>
            <ul class="card-details">Office Number: ${employees.officeNumber}</ul>
            <ul class="card-details">Email: <a href="mailto:${employees.email}">${employees.email}</a></ul>
        </div>
        `
    }

    for(Engineer of employees){
        cardStack+=
        `
        <div class="card">
            <h2 class="card-name">${employees.name}</h2>
            <h3 class="card-role">${employees.role}</h3>
            <ul class="card-details">Employee ID: ${employees.id}</ul>
            <ul class="card-details">Email: <a href="mailto:${employees.email}">${employees.email}</a></ul>
            <ul class="card-details">GitHub: <a href="https://github.com/${employees.github}" target="_blank">${employees.github}</a></ul>
        </div>
        `
    }

    for(Intern of employees){
        cardStack+=
        `
        <div class="card">
            <h2 class="card-name">${employees.name}</h2>
            <h3 class="card-role">${employees.role}</h3>
            <ul class="card-details">Employee ID: ${employees.id}</ul>
            <ul class="card-details">School: ${employees.school}</ul>
            <ul class="card-details">Email: <a href="mailto:${employees.email}">${employees.email}</a></ul>
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

fs.writeFile('../dist/index.html', finalHTML)

}

module.exports = render;