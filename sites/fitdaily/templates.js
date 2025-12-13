
const path = require("path")

const fs = require("fs")

const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json"), "utf-8"))


/* ------------------------ components ---------------------- */
function sectionTitle(title){
    
    return `
        <div class="section-title">
            <div class="section-title-top">
                <span></span>
            </div>
            <span>${title}</span>
            <div class="section-title-bottom">
                <span></span>
            </div>
        </div>
    `
}

function heroTitle(title){

    return `
        <div class="hero-title">
            <span></span>
            <span>${title}</span>
            <span></span>
        </div>
    `
}


/* ------------------------ page sections ---------------------- */ 
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
            <img src="${page.image}">
            <div></div>
            <div class="page-hero-content">
                ${heroTitle(page.name)}
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
            <div class="about-section-content">
                <div class="about-section-image-wrapper">
                    <img src="${data.aboutSection.image}">
                </div>
                <div class="about-section-description">
                    <span>${data.aboutSection.title}</span>
                    <p>${data.aboutSection.content}</p>
                    <a href="about.html">Read More</a>
                </div>
            </div>
        </div>
    `
}

function services(){

    return `
        <div class="services">
            <div class="service-content">
                <div class="service-list">
                    ${
                        data.services.serviceList.map(service => `
                            <div class="service-item">
                                <span>${service.name}</span>
                                <p>${service.description}</p>
                            </div>
                        `).join(" ")
                    }
                </div>
                <div class="service-image-wrapper">
                    <img src="${data.services.image}">
                </div>
            </div>
        </div>
    `
}

function classesSection(){

    return `
        <div class="classes-section">
            <div class="classes-section-content">
                ${sectionTitle("Our Classes")}
                <div class="class-list">
                    ${
                        data.classes.map(item => `
                            <div class="class-item">
                                <img src="${item.image}">
                                <div class="class-item-content">
                                    <span>${item.name}</span>
                                    <span>${item.trainer}</span>
                                </div>
                            </div>
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function trainers(){

    return `
        <div class="trainers">
            <div class="trainers-content">
                ${sectionTitle("Expert Trainers")}
                <div class="trainer-list">
                    ${
                        data.trainers.map(trainer => `
                            <div class="trainer-item">
                                <div class="trainer-image-wrapper">
                                    <img src="${trainer.image}">
                                </div>
                                <div class="trainer-item-content">
                                    <div class="trainer-item-header">
                                        <span>${trainer.name}</span>
                                        <span>${trainer.title}</span>
                                    </div>
                                    <div class="trainer-item-body">
                                        <p>${trainer.description}</p>
                                    </div>
                                </div>
                            </div>
                        `).join(" ")
                    }
                </div>
                <div class="trainer-selector">
                    ${
                        data.trainers.map(() => `
                            <button></button>
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function callToAction(){

    return `
        <div class="call-to-action">
            <img src="${data.callToAction.image}">
            <div></div>
            <div class="call-to-action-content">
                <span>START TRAINING TODAY</span>
                <p>${data.callToAction.content}</p>
                <a href="contact.html">Contact Now</a>
            </div>
        </div>
    `
}

function testimonials(){

    return `
        <div class="testimonials">
            <div class="testimonial-content">
                ${sectionTitle("Success Story")}
                <div class="testimonial-list">
                    ${
                        data.testimonials.map(item => `
                            <div class="testimonial-item">
                                <p>${item.content}</p>
                                <div class="testimonial-image-wrapper">
                                    <img src="${item.image}">
                                </div>
                                <span>${item.name}</span>
                                <span>${item.title}</span>
                            </div>
                        `).join(" ")
                    }
                </div>
                <div class="testimonial-control">
                    <button><i class="fa-solid fa-arrow-left"></i></button>
                    <button><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    `
}

function pricing(){

    return `
        <div class="pricing">
            <div class="pricing-content">
                ${sectionTitle("Membership Plan")}
                <div class="pricing-list">
                    ${
                        data.pricing.map(item => `
                            <div class="pricing-item">
                                <div class="pricing-item-header">
                                    <span>${item.type}</span>
                                </div>
                                <div class="pricing-item-body">
                                    <span>${item.price}</span>
                                    <div class="pricing-item-feature">
                                        <span>Duration</span>
                                        <span>${item.duration}</span>
                                    </div>
                                    <div class="pricing-item-feature">
                                        <span>Personal Trainer</span>
                                        <span>${item.personalTrainer}</span>
                                    </div>
                                    <div class="pricing-item-feature">
                                        <span>Amount Of People</span>
                                        <span>${item.amountOfPeople}</span>
                                    </div>
                                    <div class="pricing-item-feature">
                                        <span>Number of visits</span>
                                        <span>${item.numberOfVisits}</span>
                                    </div>
                                </div>
                            </div>
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function contactSection(){

    return `
        <div class="contact-section">
            <div class="contact-section-content">
                <div class="contact-info">
                    <span>Contact us</span>
                    <div class="contact-info-item">
                        <span>Our Location</span>
                        <span>${data.contact.address}</span>
                    </div>
                    <div class="contact-info-item">
                        <span>Phone</span>
                        <a href="tel:${data.contact.phone}">${data.contact.phone}</a>
                    </div>
                    <div class="contact-info-item">
                        <span>Email</span>
                        <a href="mailto:${data.contact.email}">${data.contact.email}</a>
                    </div>
                </div>
                <form class="contact-form">
                    <span>Leave a message</span>
                    <input type="text" placeholder="Name" required>
                    <input type="email" placeholder="Email" required>
                    <textarea placeholder="Message"></textarea>
                    <button>Send Message</button>
                </form>
            </div>
        </div>
    `
}


/* ------------------------ full page templates ---------------------- */
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
                <div class="root">
                    ${header("home")}
                    <div class="main">
                        ${homeHero()}
                        ${aboutSection()}
                        ${services()}
                        ${classesSection()}
                        ${trainers()}
                        ${callToAction()}
                        ${testimonials()}
                        ${pricing()}
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
                <div class="root">
                    ${header("about")}
                    <div class="main">
                        ${pageHero(data.aboutHero)}
                        ${aboutSection()}
                        ${callToAction()}
                        ${trainers()}
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
                <div class="root">
                    ${header("contact")}
                    <div class="main">
                        ${pageHero(data.contactHero)}
                        ${contactSection()}
                    </div>
                    ${footer()}
                </div>
                <script type="module" src="public/js/contact.js"></script>
            </body>
        </html>
    `
}

function classes(){

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${data.brand.name} - Classes</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
                <link rel="stylesheet" href="public/css/classes.css">
            </head>
            <body>
                <div class="root">
                    ${header("classes")}
                    <div class="main">
                        ${pageHero(data.classesHero)}
                        ${classesSection()}
                        ${aboutSection()}
                        ${callToAction()}
                        ${testimonials()}
                    </div>
                    ${footer()}
                </div>
                <script type="module" src="public/js/classes.js"></script>
            </body>
        </html>
    `
}



module.exports = { home, about, contact, classes }

