const path = require("path")

const fs = require("fs")

const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json"), "utf-8"))



/* ---------------------------- sections -------------------------- */
function header(){

    return `
        <div class="header">
            <div class="header-body">
                <a href="index.html">${data.brand.name}</a>
                <div class="nav">
                    <div class="nav-body">
                        <a href="index.html">Home</a>
                        <a href="about.html">About</a>
                        <a href="contact.html">Contact</a>
                    </div>
                    <a href="index.html">SUBMIT A PROPERTY</a>
                </div>
                <button><i class="fa-solid fa-bars"></i></button>
                <button><i class="fa-solid fa-x"></i></button>
            </div>
        </div>
    `
}

function footer(){

    return `
        <div class="footer">
            <div class="footer-body">
                <div class="footer-item">
                    <a href="index.html">${data.brand.name}</a>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
                <div class="footer-item">
                    <span>Quick Links</span>
                    <div class="footer-item-body">
                        <a href="index.html">Home</a>
                        <a href="about.html">About</a>
                        <a href="contact.html">Contact</a>
                    </div>
                </div>
                <div class="footer-item">
                    <span>Contact Us</span>
                    <div class="footer-item-body">
                        <span>${data.contact.address}</span>
                        <a href="tel:${data.contact.phone}">${data.contact.phone}</a>
                        <a href="mailto:${data.contact.email}">${data.contact.email}</a>
                    </div>
                </div>
            </div>
        </div>
    `
}

function homeHeroSection(){

    return `
        <div class="home-hero-section">
            <img src="${data.brand.image}">
            <div></div>
            <div class="home-hero-body">
                <span>${data.brand.tagline}</span>
                <p>${data.brand.description}</p>
                <a href="index.html">Learn More</a>
            </div>
        </div>
    `
}

function categorySection(){

    return `
        <div class="category-section">
            <div class="category-body">
                <span>Explore Our Categories & Places</span>
                <div class="category-list">
                    ${
                        data.categories.map(item => `
                            <div class="category-item">
                                <span>${item.type}</span>    
                                <div class="category-item-body">
                                    <p>${item.content}</p>
                                </div>  
                            </div>
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function propertySection(){

    return `
        <div class="property-section">
            <div class="property-body">
                <span>Featured Properties</span>
                <div class="property-list">
                    ${
                        data.properties.map((item, index) => `
                            <div class="property-item">
                                <input type="radio" name="properties" id="prop-${index}" ${index == 0 ? "checked" : ""}>
                                <div class="property-item-header">
                                    <img src="${item.image}">
                                </div>
                                <label for="prop-${index}" class="property-item-body">
                                    <span>${item.name}</span>
                                    <span>${item.city}</span>
                                    <span>${item.price}</span>
                                </label>
                            </div>
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function ctaSection(){

    return `
        <div class="cta-section">
            <img src="${data.ctaSection.image}">
            <div></div>
            <div class="cta-body">
                <span>${data.ctaSection.title}</span>
                <p>${data.ctaSection.content}</p>
            </div>
        </div>
    `
}

function aboutSection(){

    return `
        <div class="about-section">
            <div class="about-main">
                <div class="about-header">
                    <img src="${data.aboutSection.image}">
                </div>
                <div class="about-body">
                    <span>${data.aboutSection.title}</span>
                    <span>${data.aboutSection.content}</span>
                    <div class="achievement-list">
                        ${
                            data.aboutSection.achievements.map(item => `
                                <div class="achievement-item">
                                    <span>${item.value}</span>
                                    <span>${item.type}</span>
                                </div>
                            `).join(" ")
                        }
                    </div>
                </div>
            </div>
        </div>
    `
}

function gitSection(){

    return `
        <div class="git-section">
            <div class="git-body">
                <span>${data.gitSection.title}</span>
                <p>${data.gitSection.content}</p>
                <a href="contact.html">Get in touch</a>
            </div>
        </div>
    `
}

function testimonialSection(){

    return `
        <div class="testimonial-section">
            <div class="testimonial-body">
                <span>Clients We Help</span>
                <div class="testimonial-list">
                    ${
                        data.testimonials.map(item => `
                            <div class="testimonial-item">
                                <div class="testimonial-item-header">
                                    <div class="testimonial-item-image">
                                        <img src="${item.image}">
                                    </div>
                                    <span>${item.name}</span>
                                    <span>${item.title}</span>
                                </div>
                                <div class="testimonial-item-body">
                                    <p>${item.content}</p>
                                </div>
                            </div>   
                        `).join(" ")
                    }
                    <div class="testimonial-placeholder">
                        <p>Testimonials</p>
                    </div>
                </div>
            </div>
        </div>
    `
}

function agentSection(){

    return `
        <div class="agent-section">
            <div>

            </div>
        </div>
    `
}

function pageHeroSection(page){

    return `
        <div class="page-hero-section">
            <img src="${page.image}">
            <div></div>
            <div class="page-hero-body">
                <span>${page.name}</span>
            </div>
        </div>
    `
}

function contactSection(){

    return `
        <div class="contact-section">
        
        </div>
    `
}


/* ---------------------------- pages  -------------------------- */
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
                    ${header("home")}
                    <div class="body">
                        ${homeHeroSection()}
                        ${categorySection()}
                        ${propertySection()}
                    
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
    
    `
}

function contact(){

    return `
    
    `
}

module.exports = { home, about, contact }

