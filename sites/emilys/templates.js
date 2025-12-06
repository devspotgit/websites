

const path = require("path")

const fs = require("fs")

const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json"), "utf-8"))


function page(data){

    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${data}</title>
                <link rel="stylesheet" href="public/css/main.css">
            </head>
            <body>
                <div>
                    <div>
                        <a href="index.html">Home</a>
                        <a href="about.html">About</a>
                        <a href="contact.html">Contact</a>
                    </div>
                    <h1>${data}</h1>
                </div>
                <script type="module" src="public/js/main.js"></script>
            </body>
        </html>
    `
}


function home(){

    return page(data.home.value)
}

function about(){

    return page(data.about.value)
}

function contact(){

    return page(data.contact.value)
}


module.exports = { home, about, contact }




