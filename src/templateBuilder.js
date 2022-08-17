const fs = require('fs')

let card = `
<div>
employeename here
</div>`



let finalHTML = `<body>

${card}
</body>`

function render(employees){
    let cardStack = "";

    for(employee of employees){
        cardstack+=`
        <div class="card">
        <h2>Name: ${employee.name}
    </div>`
    }

    let finalHTML = `
    <!DOCTYPE html>

<html>
    <head>
        <link rel="stylesheet" href="style.css">
    </head>

    <header>
        <h1>My Team </h1>
    </header>

    <body class="main-container">
  
        <div class="cards">
        ${cardStack}
          
        </div>
    
    <script src="index.js"></script>
    </body>
</html>
    <body>
    ${cardStack}
    </body>`

    fs.writeFile('../dist/index.html',finalHTML)
}

module.exports=render