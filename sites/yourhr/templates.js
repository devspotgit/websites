

const path = require("path")

const fs = require("fs")

const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json"), "utf-8"))



// page sections
function header(){

    return `
        
    `
}

function hero(){

    return `
    
    `
}

function blog(){

    return `
    
    `
}

function team(){

    return `
    
    `
}

function assets(){

    return `
    
    `
}

function testimonials(){

    return `
    
    `
}

function footer(){

    return `
       
    `
}

function services(){

    return `
    
    `
}

function about(){

    return `
    
    `
}

// page template
function home(){

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>YourHR</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
                <link rel="stylesheet" href="public/css/main.css">
            </head>
            <body>
                <div class="root">
                   
                </div>
                <script type="module" src="public/js/main.js"></script>
            </body>
        </html>
    `
}




module.exports = { home }




