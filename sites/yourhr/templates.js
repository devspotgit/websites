

const path = require("path")

const fs = require("fs")

const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json"), "utf-8"))



// page sections
function header(){

    return `
        <div class="header-wrap">
            <div class="header">
                <div class="header-top">
                    <a href="">${data.brand.name}</a>
                    <button><i class="fa-solid fa-bars"></i></button>
                    <button><i class="fa-solid fa-x"></i></button>
                </div>
                <div class="header-body">
                    <div class="nav">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Services</a>
                        <a href="">Blog</a>
                        <a href="">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    `
}

function hero(){

    return `
        <div class="hero">
            <img src="${data.brand.image}">
            <div class="hero-overlay"></div>
            <div class="hero-content-wrap">
                <div class="hero-content">
                    <span>${data.brand.tagline}</span>
                    <p>${data.brand.description}</p>
                    <a href="">Learn More</a>
                </div>
            </div>
        </div>
    `
}

function blog(){

    return `
        <div class="blog-wrap">
            <div class="blog">
                <span class="section-title">Blog</span>
                <p>${data.blog.title}</p>
                <div class="blog-list">
                    ${
                        data.blog.details.map(item => `
                            <div class="blog-item">
                                <div class="blog-item-top">
                                    <span>${item.title}</span>
                                    <span>${item.date}</span>
                                </div>   
                                <div class="blog-item-body">
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

function team(){

    return `
        <div class="team-wrap">
            <div class="team">
                <span class="section-title">Leadership</span>
                <div class="team-list">
                    ${
                        data.team.map(item => `
                            <div class="team-member">
                                <img src="${item.image}">
                                <div class="team-member-info">
                                    <p>${item.description}</p>
                                    <span>${item.title}</span>
                                    <span>${item.name}</span>
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
        <div class="assets-wrap">
            <div class="assets">
                ${
                    data.assets.map(item => `
                        <div class="asset">
                            <span>${item.value}</span>
                            <span>${item.title}</span>
                        </div>
                    `).join(" ")
                }
            </div>
        </div>
    `
}

function testimonials(){

    return `
        <div class="testimonials-wrap">
            <div class="testimonials">
                <span class="section-title">Happy Customers</span>
                <div class="testimonial-list">
                    ${
                        data.testimonials.map(item => `
                            <div class="testimonial-item">
                                <div class="testimonial-image-wrap">
                                    <img src="${item.image}">
                                </div>
                                <p>${item.description}</p>
                                <span>${item.name}</span>
                            </div>
                        `).join(" ")
                    }
                </div>
                <div class="testimonial-indicator">
                    ${
                        data.testimonials.map( () => `
                            <button></button>
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function footer(){

    return `
        <div class="footer-wrap">
            <div class="footer">
                <div class="footer-section">
                    <span>About</span>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
                <div class="footer-section">
                    <span>Learn More</span>
                    <div>
                        <a href="">How it works</a>
                        <a href="">Pricing</a>
                        <a href="">Useful Tools</a>
                        <a href="">Sitemap</a>
                    </div>
                </div>
                <div class="footer-section">
                    <span>Contact</span>
                    <div>
                        <span>${data.contact.address}</span>
                        <a href="mailto:${data.contact.email}">${data.contact.email}</a>
                        <a href="tel:${data.contact.phone}">${data.contact.phone}</a>
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
                <span class="section-title">Our Services</span>
                <div class="service-list">
                    ${
                        data.services.map(item => `
                            <div class="service-item">
                                <span>${item.title}</span>
                                <p>${item.description}</p>
                            </div>
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function about(){

    return `
        <div class="about-wrap">
            <div class="about">
                <div class="about-top">
                    <span class="section-title">Our Agency</span>
                    <div class="about-top-image-wrap">
                        <img src="${data.about.image}">
                    </div>
                </div>
                <div class="about-body">
                    <span class="section-title">Why Us?</span>
                    <div class="about-body-content">
                        ${
                            data.about.details.map(item => `
                                <div class="about-body-item">
                                    <div class="about-item-title">
                                        <span>${item.title}</span>
                                        <span>+</span>
                                        <span>-</span>
                                    </div>
                                    <div class="about-item-desc">
                                        <p>${item.description}</p>
                                    </div>
                                </div>
                            `).join(" ")
                        }
                    </div>
                </div>
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
                <title>YourHR</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
                <link rel="stylesheet" href="public/css/main.css">
            </head>
            <body>
                <div class="root">
                   ${header()}
                   ${hero()}
                   ${about()}
                   ${assets()}
                   ${team()}
                   ${testimonials()}
                   ${services()}
                   ${blog()}
                   ${footer()}
                </div>
                <script type="module" src="public/js/main.js"></script>
            </body>
        </html>
    `
}




module.exports = { home }




