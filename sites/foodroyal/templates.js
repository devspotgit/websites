const path = require("path")

const fs = require("fs")

const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json"), "utf-8"))


/* --------------------- page sections ----------------------- */
function header(){

    return `
        <div class="header">
            <div class="header-body">
                <a href="index.html">${data.brand.name}</a>
                <div class="nav-wrapper">
                    <div class="nav">
                        <a href="index.html">Home</a>
                        <a href="about.html">About</a>
                        <a href="contact.html">Contact</a>
                    </div>
                </div>
                <button><i class="fa-solid fa-bars"></i></button>
            </div>
        </div>
    `
}

function footer(){

    return `
        <div class="footer">
            <div class="footer-body">
                <div class="footer-item">
                    <span>Contact Us</span>
                    <div class="footer-item-body">
                        <span>${data.contact.address}</span>
                        <a href="tel:${data.contact.phone}">${data.contact.phone}</a>
                        <a href="mailto:${data.contact.email}">${data.contact.email}</a>
                    </div>
                </div>            
                <div class="footer-item">
                    <span>Useful Link</span>
                    <div class="footer-item-body">
                        <a href="index.html">Home</a>
                        <a href="about.html">About</a>
                        <a href="contact.html">Contact</a>
                    </div>
                </div>                      
            </div>
        </div>
    `
}

function homeHero(){

    return `
        <div class="home-hero">
            <div class="home-hero-body">
                <span>${data.brand.tagline}</span>
                <p>${data.brand.description}</p>
                <div class="home-hero-image">
                    <img src="${data.brand.image}">
                </div>
            </div>
        </div>
    `
}

function process(){

    return `
        <div class="process-section">
            <div class="process-body">
                <span>Our Process</span>
                <div class="process-list">
                    ${
                        data.processSection.map(item => `
                            <div class="process-item">
                                <span>${item.name}</span>
                                <p>${item.description}</p>
                            </div>    
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function testimonial(){

    return `
        <div class="testimonial-section">
            <div class="testimonial-body">
                <span>Testimonials</span>
                <div class="testimonial-list">
                    ${
                        data.testimonials.map(item => `
                            <div class="testimonial-item">
                                <p>${item.description}</p>
                                <div class="testimonial-item-image">
                                    <img src="${item.image}">
                                </div>
                                <span>${item.name}</span>
                                <span>${item.title}</span>
                            </div>
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function product(){

    return `
        <div class="product-section">
            <div class="product-body-wrapper">
                <span>Products</span>
                <div class="product-body">
                    <div class="product-control">
                        <button><i class="fa-solid fa-arrow-left"></i></button>
                        <button><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div class="product-list">
                        ${
                            data.products.map(product => `
                                <div class="product-item">
                                    <div class="product-item-image">
                                        <img src="${product.image}">
                                    </div>
                                    <span>${product.name}</span>
                                    <p>${product.description}</p>
                                </div>
                            `).join(" ")
                        }
                    </div>
                </div>
            </div>
        </div>
    `
}

function newsletter(){

    return `
        <div class="newsletter-section">
            <div class="newsletter-body">
                <span>Suscribe to our newsletter</span>
                <input type="email" placeholder="Enter your email" required>
                <button>Submit</button>
            </div>
        </div>
    `
}

function contactSection(){

    return `
        <div class="contact-section">
            <img src="${data.contactSection.image}">
            <div class="contact-overlay"></div>
            <div class="contact-form">
                <input type="text" placeholder="Name" required>
                <input type="emailt" placeholder="Email" required>
                <input type="text" placeholder="Subject" required>
                <textarea placeholder="Message" required></textarea>
                <button>Submit</button>
            </div>
        </div>
    `
}

function pageHero(page){

    return `
        <div class="page-hero-section">
            <div class="page-hero-body">
                <span>${page.title}</span>
                <p>${page.description}</p>
                <div class="page-hero-image">
                    <img src="${page.image}">
                </div>
            </div>
        </div>
    `
}


/* --------------------- full page templates ---------------------- */
function home(){

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${data.brand.name} - Home</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
                <link rel="stylesheet" href="public/css/home.css">
            </head>
            <body>
                <div class="main">
                    ${header()}
                    <div class="body">
                        ${homeHero()}
                        ${process()}
                        ${product()}
                        ${testimonial()}
                        ${newsletter()}
                    </div>
                    ${footer()}
                </div>
                <script type="module" src="public/js/home.js"></script>
            </body>
        </html>
    `
}

function about(){

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${data.brand.name} - About</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
                <link rel="stylesheet" href="public/css/about.css">
            </head>
            <body>
                <div class="main">
                    ${header()}
                    <div class="body">
                        ${pageHero(data.aboutHero)}
                        ${process()}
                        ${newsletter()}
                        ${testimonial()}
                    </div>
                    ${footer()}
                </div>
                <script type="module" src="public/js/about.js"></script>
            </body>
        </html>
    `
}

function contact(){

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${data.brand.name} - Contact</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
                <link rel="stylesheet" href="public/css/contact.css">
            </head>
            <body>
                <div class="main">
                    ${header()}
                    <div class="body">
                        ${pageHero(data.contactHero)}
                        ${contactSection()}
                        ${newsletter()}
                    </div>
                    ${footer()}
                </div>
                <script type="module" src="public/js/contact.js"></script>
            </body>
        </html>
    `
}

module.exports = { home, about, contact }

