

const path = require("path")

const fs = require("fs")

const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json"), "utf-8"))


// template parts
function sectionTitle(title){

    return `
        <div class="section-title">
            <span>${title}</span>
            <div>
                <span>${title}</span>
            </div>
        </div>
    `
}

function productItem(product){

    return `
        <div class="product-item">
            <div>
                <img src="${product.image}">
            </div>
            <div>
                <span>${product.name}</span>
                <span>${product.price}</span>
            </div>
        </div>
    `
}

function testimonialItem(testimonial){

    return `
        <div class="testimonial-item">
            <div>
                <img src="${testimonial.image}">
            </div>
            <span>${testimonial.name}</span>
            <p>${testimonial.content}</p>
            <span>${testimonial.title}</span>
        </div>
    `
}

function blogItem(blog){

    return `
        <div class="blog-item">
            <div>
                <img src="${blog.image}">
            </div>
            <div>
                <a href="#">${blog.title}</a>
                <span>${blog.date}</span>
            </div>
        </div>
    `
}



// page sections
function header(menu){

    return `
        <div class="header">
            <div>
                <div>
                    <a href="index.html">${data.brand.name}</a>
                    <button class="open-menu">
                        <span><i class="fa-solid fa-bars"></i></span>
                        <span>MENU</span>
                    </button>
                </div>
                <div class="menu-wrapper">
                    <div>
                        <a href="index.html" ${menu == "home" ? "selected" : ""}>Home</a>
                        <a href="about.html" ${menu == "about" ? "selected" : ""}>About</a>
                        <a href="blog.html" ${menu == "blog" ? "selected" : ""}>Blog</a>
                        <a href="contact.html" ${menu == "contact" ? "selected" : ""}>Contact</a>
                    </div>
                </div>
            </div>
        </div>
    `
}

function footer(){

    const social = {

        Facebook:'<i class="fa-brands fa-facebook-f"></i>',

        Twitter:'<i class="fa-brands fa-twitter"></i>'
    }

    return `
        <div class="footer">
            <div>
                <div>
                    <span>Social</span>
                    <div>
                        ${
                            data.social.map(item => `
                                <a href="${item.url}">${social[item.name]}</a>
                            `).join(" ")
                        }
                    </div>
                </div>
                <div>
                    <span>Menu</span>
                    <div>
                        <a href="index.html">Home</a>
                        <a href="about.html">About</a>
                        <a href="contact.html">Contact</a>
                        <a href="blog.html">Blog</a>
                    </div>
                </div>
                <div>
                    <span>Contact Us</span>
                    <div>
                        <div>
                            <span><i class="fa-solid fa-location-dot"></i></span>
                            <span>${data.contact.address}</span>
                        </div>
                        <div>
                            <span><i class="fa-solid fa-phone"></i></span>
                            <a href="tel:${data.contact.phone}">${data.contact.phone}</a>
                        </div>
                        <div>
                            <span><i class="fa-solid fa-location-dot"></i></span>
                            <a href="mailto:${data.contact.email}">${data.contact.email}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

function newsletter(){

    return `
        <form class="newsletter">
            <div> 
                <span>SUBSCRIBE TO OUR NEWSLETTER</span>
                <div>
                    <input type="text" placeholder="Enter Email Address" required>
                    <button>Subscribe</button>
                </div>
            </div>
        </form>
    `
}

function aboutSection(){

    return `
        <div class="about-section">
            <div>
                <div>
                    <img src="${data.aboutSection.image}">
                </div>
                <div>
                    <span>${data.aboutSection.title}</span>
                    <p>${data.aboutSection.content}</p>
                </div>
            </div>
        </div>
    `
}

function homeHero(){

    return `
        <div class="home-hero">
            <img src="${data.brand.image}">
            <div></div>
            <div>
                <span>${data.brand.name}</span>
                <div>
                    <span></span>
                    <span>${data.brand.tagline}</span>
                    <span></span>
                </div>
            </div>
        </div>
    `
}

function pageHero(page){

    return `
        <div class="page-hero">
            <img src="${page.image}">
            <div></div>
            <div>
                <span>${page.name}</span>
            </div>
        </div>
    `
}

function summerSaleSection(){

    return `
        <div class="summer-sale">
            <img src="${data.summerSaleSection.image}">
            <div></div>
            <div>
                <span>${data.summerSaleSection.content}</span>
            </div>
        </div>
    `
}

function achievementSection(){

    return `
        <div class="achievement">
            <img src="${data.achievementSection.image}">
            <div></div>
            <div>
                ${
                    data.achievementSection.achievements.map(achievement => `
                        <div>
                            <span>${achievement.number}</span>
                            <span>${achievement.type}</span>
                        </div>
                    `).join(" ")
                }
            </div>
        </div>
    `
}

function products(){

    return `
        <div class="products">
            <div>
                ${sectionTitle("Our Products")}
                <div>
                    ${
                        data.products.map(product => productItem(product)).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function recentBlog(){

    return `
        <div class="recent-blog">
            <div>
                ${sectionTitle("Recent Blog")}
                <div>
                    ${
                        data.blog.slice(0, 4).map(item => blogItem(item)).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function testimonials(){

    return `
        <div class="testimonials">
            <div>
                ${sectionTitle("Testimonials")}
                <div>
                    ${
                        data.testimonials.map(testimonial => testimonialItem(testimonial)).join(" ")
                    }
                </div>
                <div>
                    ${
                        data.testimonials.map(testimonial => `<button class="control"></button>`).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function trending(){

    return `
        <div class="trending">
            <div>
                ${sectionTitle("Trending")}
                <div>
                    ${
                        data.products.map(product => productItem(product)).join(" ")
                    }
                </div>
            </div>
        </div>
    `
}

function contactForm(){

    return `
        <div class="contact-form">
            <div>
                <div>
                    <div>
                        <span>Address</span>
                        <span>${data.contact.address}</span>
                    </div>
                    <div>
                        <span>Phone</span>
                        <a href="tel:${data.contact.phone}">${data.contact.phone}</a>
                    </div>
                    <div>
                        <span>Email</span>
                        <a href="mailto:${data.contact.email}">${data.contact.email}</a>
                    </div>
                </div>
                <form>
                    <input type="text" placeholder="Name" required> 
                    <input type="email" placeholder="Email" required> 
                    <input type="text" placeholder="Subject" required> 
                    <textarea placeholder="Message" required></textarea> 
                    <button>Send Message</button>
                </form>
            </div>
        </div>
    `
}

function allBlog(){

    return `
        <div class="all-blog">
            <div>
                ${
                    data.blog.map(item => blogItem(item)).join(" ")
                }
            </div>
        </div>
    `
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
                        ${trending()}
                        ${aboutSection()}
                        ${products()}
                        ${summerSaleSection()}
                        ${testimonials()}
                        ${recentBlog()}
                        ${achievementSection()}
                        ${newsletter()}
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
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${data.brand.name} - About</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
                <link rel="stylesheet" href="public/css/main.css">
            </head>
            <body>
                <div class="root">
                    ${header("about")}
                    <div class="main">
                        ${pageHero(data.aboutHeroSection)}
                        ${aboutSection()}
                        ${testimonials()}
                        ${achievementSection()}
                        ${newsletter()}
                    </div>
                    ${footer()}
                </div>
                <script type="module" src="public/js/main.js"></script>
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
                <link rel="stylesheet" href="public/css/main.css">
            </head>
            <body>
                <div class="root">
                    ${header("contact")}
                    <div class="main">
                        ${pageHero(data.contactHeroSection)}
                        ${contactForm()}
                        ${achievementSection()}
                        ${newsletter()}
                    </div>
                    ${footer()}
                </div>
                <script type="module" src="public/js/main.js"></script>
            </body>
        </html>
    `
}


function blog(){

    return `
         <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${data.brand.name} - Blog</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
                <link rel="stylesheet" href="public/css/main.css">
            </head>
            <body>
                <div class="root">
                    ${header("blog")}
                    <div class="main">
                        ${pageHero(data.blogHeroSection)}
                        ${allBlog()}
                        ${achievementSection()}
                        ${newsletter()}
                    </div>
                    ${footer()}
                </div>
                <script type="module" src="public/js/main.js"></script>
            </body>
        </html>
    `
}




module.exports = { home, about, contact, blog }




