const path = require("path")

const fs = require("fs")

const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json"), "utf-8"))


/*------------------------ page sections ----------------------- */
function header(){

    return `
        <div class="header">
            <div class="header-body">
                <a href="index.html">${data.brand.name}</a>
                <div class="nav">
                    <a href="index.html">Home</a>
                    <a href="about.html">About</a>
                    <a href="contact.html">Contact</a>
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
                <div class="pages">
                    <span>Pages</span>
                    <div class="pages-body">
                        <a hre="index.html">Home</a>
                        <a hre="about.html">About</a>
                        <a hre="contact.html">Contact</a>
                    </div>
                </div>
                <div class="contact">
                    <span>Contact Us</span>
                    <div class="contact-body">
                        <span>${data.contact.address}</span>
                        <a href="tel:${data.contact.phone}">${data.contact.phone}</a>
                        <a href="mailto:${data.contact.email}">${data.contact.email}</a>
                    </div>
                </div>
                <div class="newsletter">
                    <span>Join Our Newsletter</span>
                    <form class="newsletter-form">
                        <input type="email" placeholder="Enter your email" required>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    `
}

function homeHeroSection(){

    return `
        <div class="home-hero-section">
            <div class="home-hero-body">
                <div class="home-hero-content">
                    <span>${data.brand.tagline}</span>
                    <p>${data.brand.description}</p>
                    <div class="home-hero-image">
                        <img src="${data.brand.image}">
                    </div>
                </div>
            </div>
        </div>
    `
}

function expertiseSection(){

    return `
        <div class="expertise-section">
            <div class="expertise-body">
                <span>Our expertise</span>
                <div class="expertise-list">
                    ${
                        data.expertises.map(item => `
                            <div class="expertise-item">
                                <span>${item.name}</span>
                                <p>${item.description}</p>
                                <a href="index.html">Learn More</a>
                            </div>    
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function industrySection(){

    return `
        <div class="industry-section">
            <div class="industry-body">
                <span>A wide range of industries served</span>
                <div class="industry-wrapper">
                    <div class="industry-list">
                        ${
                            data.industries.map(item => `
                                <div class="industry-item-wrapper">
                                    <div class="industry-item">
                                        <div class="industry-item-image">
                                            <img src="${item.image}">
                                        </div>
                                        <span>${item.name}</span>
                                        <p>${item.description}</p>
                                    </div>
                                </div>
                            `).join(" ")
                        }
                    </div>
                    <div class="industry-list">
                        ${
                            data.industries.map(item => `
                                <div class="industry-item-wrapper">
                                    <div class="industry-item">
                                        <div class="industry-item-image">
                                            <img src="${item.image}">
                                        </div>
                                        <span>${item.name}</span>
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

function statisticSection(){

    return `
        <div class="statistic-section">
            <div class="statistic-body">
                <span>Excellent results for our clients</span>
                <div class="statistic-list">
                    ${
                        data.statistics.map(item => `
                            <div class="statistic-item">
                                <span>${item.name}</span>
                                <p>${item.description}</p>
                                <span>${item.number}</span>
                            </div>
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function workSection(){

    return `
        <div class="work-section">
            <div class="work-body">
                <span>Recent Work</span>
                <div class="work-list">
                    ${
                        data.works.map(item => `
                            <div class="work-item">
                                <span>${item.title}</span>
                                <p>${item.description}</p>
                                <div class="work-image">
                                    <img src="${item.image}">
                                </div>
                            </div>
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function testimonialSection(){

    return `
        <div class="testimonial-section">
            <div class="testimonial-body">
                <span>We have helped 100+ businesses</span>
                <div class="testimonial-list">
                    ${
                        data.testimonials.map(item => `
                            <div class="testimonial-item">
                                <p>${item.description}</p>
                                <span>${item.name}</span>
                                <span>${item.title}</span>
                            </div>
                        `).join(" ")
                    }
                </div>
                <div class="testimonial-control">
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

function blogSection(){

    return `
        <div class="blog-section">
            <div class="blog-body">
                <span>Blog</span>
                <div class="blog-list">
                    ${
                        data.blog.map( item => `
                            <div class="blog-item">
                                <div class="blog-item-image">
                                    <img src="${item.image}">
                                </div>
                                <span>${item.date}</span>
                                <span>${item.name}</span>
                                <a href="">Learn More</a>
                            </div>
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function aboutHeroSection(){

    return `
        <div class="about-hero-section">
            <div class="about-hero-body">
                <span>About ${data.brand.name}</span>
                <p>${data.aboutHero.description}</p>
                <a href="">Explore our services</a>
                <div class="about-hero-image">
                    <img src="${data.aboutHero.image}">
                </div>
            </div>
        </div>
    `
}

function teamSection(){

    return `
        <div class="team-section">
            <div class="team-body">
                <span>Meet our team</span>
                <div class="team-list">
                    ${
                        data.team.map(item => `
                            <div class="team-member">
                                <div class="team-member-image">
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

function processSection(){

    return `
        <div class="accordion-section">
            <div class="accordion-body">
                <span>Proven process</span>
                <div class="accordion-list">
                    ${
                        data.process.map((item, index) => `
                            <input type="radio" name="process" id="process-${index}">
                            <div class="accordion-item">
                                <label for="process-${index}" class="accordion-item-header">
                                    <span>${item.name}</span>
                                    <span>+</span>
                                    <span>-</span>
                                </label>
                                <div class="accordion-item-body">
                                    <p>${item.description}</p>
                                </div>
                            </div>
                        `).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function faqSection(){

    return `
        <div class="accordion-section">
            <div class="accordion-body">
                <span>Frequently asked questions</span>
                <div class="accordion-list">
                    ${
                        data.faq.map((item, index) => `
                            <input type="radio" name="faq" id="faq-${index}">
                            <div class="accordion-item">
                                <label for="faq-${index}" class="accordion-item-header">
                                    <span>${item.question}</span>
                                    <span>+</span>
                                    <span>-</span>
                                </label>
                                <div class="accordion-item-body">
                                    <p>${item.answer}</p>
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
            <div class="contact-body">
                <div class="contact-image">
                    <img src="${data.contactSection.image}">
                </div>
                <div class="contact-form">
                    <input type="text" placeholder="Name" required>
                    <input type="email" placeholder="Email" required>
                    <input type="text" placeholder="Subject" required>
                    <textarea placeholder="Message" required></textarea>
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    `
}

/*------------------------ full page templates ----------------------- */
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
                        ${homeHeroSection()}
                        ${expertiseSection()}
                        ${industrySection()}
                        ${statisticSection()}
                        ${workSection()}
                        ${testimonialSection()}
                        ${blogSection()}
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
                        ${aboutHeroSection()}
                        ${teamSection()}
                        ${processSection()}
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
                       ${contactSection()}
                       ${faqSection()}
                    </div>
                    ${footer()}
                </div>
                <script type="module" src="public/js/contact.js"></script>
            </body>
        </html>
    `
}

module.exports = { home, about, contact }

