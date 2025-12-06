
const api = require("./api.js")

// template parts
function header(){

    return `
        <div class="header">
            <a href="/">Websites</a>
            <button><i class="fa-solid fa-bars"></i></button>
        </div>
    `
}

function footer(){

    return `
        <div class="footer">
            <a href="https://devspot.ca">Devspot</a>
        </div>
    `
}

function title(category){

    return `
        <div class="title">
            <a href="/">Home</a>
            <span><i class="fa-solid fa-chevron-right"></i></span>
            <span>${api.getName(category)}</span>
        </div>
    `
}

function summary(){

    return `
        <div class="summary">
            <span>Explore our catalog of unique and modern designed website templates</span>
        </div>
    `
}

function postItem(post){

    return `
        <div class="post-item">
            <div class="post-item-body">
                <img src="${post.image}">
                <div class="post-item-overlay">
                    <a href="/download/${post.slug}">Download</a>
                    <a href="/sites/${post.slug}/index.html" target="_blank">Live</a>
                </div>
            </div>
            <div class="post-item-footer">
                <span>${api.getName(post.slug)}</span>
                <span>${api.getDate(post.date)}</span>
            </div>
        </div>
    `
}

function postList(posts){

    return `
        <div class="post-list">
            ${posts.map(post => postItem(post)).join(" ")}
        </div>
    `
}

function categoryList(category, categories){

    return `
        <div class="category-list">
            <div class="category-list-header">
                <span>Categories</span>
                <button><i class="fa-solid fa-x"></i></button>
            </div>
            <div class="category-list-body">
                ${
                    categories.map(_category => `
                        <a href="/categories/${_category}" ${category == _category ? "selected" : ""}>${api.getName(_category)}</a>
                    `).join(" ")
                }
            </div>
        </div>
    `
}



// full page templates
function categoryPage(category){

    const posts = api.getCategoryPost(category)

    const categories = api.getCategoryList()

    api.sortPost(posts)

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${api.getName(category)}</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
                <link rel="stylesheet" href="/css/main.css">
            </head>
            <body>
                <div class="root">
                    ${categoryList(category, categories)}
                    <div class="main">
                        ${header()}
                        ${summary()}
                        ${title(category)}
                        ${postList(posts)}
                        ${footer()}
                    </div>
                    <div class="overlay"></div>
                </div>
                <script type="module" src="/js/main.js"></script>
            </body>
        </html>
    `
}

module.exports = { categoryPage }

