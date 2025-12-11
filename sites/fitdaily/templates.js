
const path = require("path")

const fs = require("fs")

const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json"), "utf-8"))


// components
function serviceItem(){

}

function testimonialItem(){

}

function pricingItem(){

}

function trainerItem(){

}

function classItem(){

}

function sectionTitle(){

}





// page sections
function header(menu){

    return `
        <div class="header">
            <div></div>
            <div class="header-content">
                <a href="index.html">${data.brand.name}</a>
                <div class="menu-wrapper">
                    <button><i class="fa-solid fa-x"></i></button>
                    <div class="menu">
                        <a href="index.html" ${menu == "home" ? "selected" : ""}>Home</a>
                        <a href="about.html" ${menu == "about" ? "selected" : ""}>About</a>
                        <a href="classes.html" ${menu == "classes" ? "selected" : ""}>Classes</a>
                        <a href="contact.html" ${menu == "contact" ? "selected" : ""}>Contact</a>
                    </div>
                </div>
                <button><i class="fa-solid fa-bars"></i></button>
            </div>
        </div>
    `
}

function homeHero(){

    return `
        <div class="home-hero">
            <img src="${data.brand.image}">
            <div></div>
            <div class="home-hero-content">
                <span>${data.brand.name}</span>
                <p>${data.brand.tagline}</p>
                <a href="index.html">Read More</a>
            </div>
        </div>
    `
}

function pageHero(page){

    return `
        <div class="page-hero">
            <div class="page-hero-content">
                <img src="${page.image}">
                <span>${page.name}</span>
            </div>
        </div>
    `
}

function footer(){

    const social = {

        Facebook: '<i class="fa-brands fa-facebook-f"></i>',

        Twitter: '<i class="fa-brands fa-twitter"></i>',

        Instagram: '<i class="fa-brands fa-instagram"></i>'
    }

    return `
        <div class="footer">
            <div class="footer-content">
                <div class="footer-contact">
                    <div class="footer-contact-item">
                        <span>Phone</span>
                        <a href="tel:${data.contact.phone}">${data.contact.phone}</a>
                    </div>
                    <div class="footer-contact-item">
                        <span>Email</span>
                        <a href="mailto:${data.contact.email}">${data.contact.email}</a>
                    </div>
                    <div class="footer-contact-item">
                        <span>Address</span>
                        <span>${data.contact.address}</span>
                    </div>
                </div>
                <div class="newsletter">
                    <img src="${data.brand.image}">
                    <div></div>
                    <div class="newsletter-content">
                        <span>SUBSCRIBE TO OUR MAILING LIST</span>
                        <span>Sign up to receive the latest information</span>
                        <form class="newsletter-form">
                            <input type="email" placeholder="Enter your email address" required>
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div class="social">
                    ${
                        data.social.map(item => `<a href="${item.url}">${social[item.name]}</a>`).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function aboutSection(){

    return `
        <div class="about-section">
        
        </div>
    `
}

function classSection(){

}

function trainers(){

}

function testimonials(){

}

function callToAction(){

}

function services(){

}

function price(){

}

function register(){

}

function contactSection(){

}



// full page templates
function home(){

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${data.brand.name} - Home</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
                <link rel="stylesheet" href="public/css/main.css">
            </head>
            <body>
                <div class="root">
                    ${header("home")}
                    <div class="main">
                        ${homeHero()}
                        
                    </div>
                    ${footer()}
                </div>
                <script type="module" src="public/js/main.js"></script>
            </body>
        </html>
    ` 
}

function about(){

    return `
    
    `
}

function contact(){

    return `
    
    `
}

function classes(){

    return `
    
    `
}



module.exports = { home, about, contact, classes }

