const fs = require('fs')

function render(employees){
    let cardStack = "";

    for(employee of employees){
        cardstack+=`
        <div class="card">
        <h2>Name: ${employee.name}
    </div>`
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

    fs.writeFile('../dist/index.html',finalHTML)
}

module.exports=render