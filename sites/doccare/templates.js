

const path = require("path")

const fs = require("fs")

const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json"), "utf-8"))



// page sections
function header(){

    return `
        <div class="header-wrap">
            <div class="header">
                <div class="header-top">
                    <a class="brand" href="">${data.brand.name}</a>
                    <button class="control-nav"><i class="fa-solid fa-bars"></i></button>
                </div>
                <div class="nav-wrap">
                    <div class="nav">
                        <div class="nav-list">
                            <a class="nav-item" href="">Home</a>
                            <a class="nav-item" href="">About</a>
                            <a class="nav-item" href="">Contact</a>
                        </div>
                        <a class="header-action" href="">Make an Appointment</a>
                    </div>
                </div>
            </div>
        </div>
    `
}

function services(){

    return `
        <div class="services-wrap">
            <div class="services">
                ${
                    data.services.map(service => `
                        <div class="service">
                            <span>${service.title}</span>
                            <p>${service.description}</p>
                            <a href="">Learn More</a>
                        </div>
                    `).join(" ")
                }
            </div>
        </div>
    `
}

function departments(){

    return `
        <div class="departments-wrap">
            <div class="departments">
                <span>Our Departments</span>
                <p>${data.departments.description}</p>
                <div class="department-details">
                    ${
                        data.departments.details.map(item => `
                            <div class="department-detail">
                                <div class="department-detail-image-wrap">
                                    <img src="${item.image}">
                                </div>
                                <div class="department-detail-content">
                                    <span>${item.title}</span>
                                    <p>${item.description}</p>
                                    <a href="">Learn More</a>
                                </div>
                            </div>
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function testimonials(){

    return `
        <div class="testimonials">
            ${
                data.testimonials.map(item => `
                    <div class="testimonial">
                        <img src="${item.image}">
                        <p>${item.description}</p>
                        <span>${item.name}</span>
                    </div>
                `).join(" ")
            }
        </div>
    `
}

function team(){

    return `
        <div class="team-wrap">
            <div class="team">
                <span>Expert Doctors</span>
                <div class="team-list">
                    ${
                        data.team.map(item => `
                            <div class="team-item">
                                <div class="team-item-image-wrap">
                                    <img src="${item.image}">
                                </div>
                                <div class="team-item-content">
                                    <span>${item.name}</span>
                                    <span>${item.title}</span>
                                </div>
                            </div>
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function assets(){

    return `
        <div class="assets">
            <div class="assets-top">
                ${
                    data.assets.map(item => `
                        <button>${item.label}</button>
                    `).join(" ")
                }
            </div>
            <div class="assets-list">
                ${
                    data.assets.map(item => `
                        <div class="asset">
                            <div class="asset-image-wrap">
                                <img src="${item.image}">
                            </div>
                            <div class="asset-content">
                                <span>${item.title}</span>
                                <p>${item.descriptio}</p>
                            </div>
                        </div>    
                    `) 
                }
            </div>
        </div>
    `
}

function action(){

    return `
        <div class="action">
            ${
                data.action.map(item => `
                    <div class="action-item">
                        <img src="${item.image}">
                        <div class="action-item-content">
                            <span>${item.title}</span>
                            <p>${item.description}</p>
                            <a href="">Learn More</a>
                        </div>
                    </div>
                `).join(" ")
            }
        </div>
    `
}

function about(){

    return `
        <div class="about-wrap">
            <div class="about">
                <div class="about-image-wrap">
                    <img src="${data.about.image1}">
                    <img src="${data.about.image2}">
                </div>
                <div class="about-content">
                    <span>Welcome to DocCare</span>
                    <span>${data.about.title}</span>
                    <p>${data.about.description}</p>
                    <div class="about-details">
                        ${
                            data.about.details.map(item => `
                                <div class="about-detail">
                                    <span><i class="fa-regular fa-circle-check"></i></span>
                                    <p>${item}</p>
                                </div>
                            `).join(" ")
                        }
                    </div>
                    <a href="">Learn More</a>
                </div>
            </div>
        </div>
    `
}

function hero(){

    return `
        <div class="hero-wrap">
            <div class="hero-overlay"></div>
            <img src="${data.brand.image}">
            <div class="hero-content">
                <span>${data.brand.tagline}</span>
                <p>${data.brand.description}</p>
                <a href="">Check Our Services</a>
            </div>
        </div>
    `
}

function footer(){

    return `
        <div class="footer-wrap">
            <div class="footer">
            
            </div>
        </div>
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
                <title></title>
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




