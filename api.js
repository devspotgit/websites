
const path = require("path")

const fs = require("fs")

const posts = JSON.parse(fs.readFileSync(path.join(__dirname, "posts.json"), "utf-8"))

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "December"]


function getCategoryList(){

    const categoryList = []

    categoryList.push("all")
    
    posts.forEach(post => {

        if(post.published && !categoryList.find(category => category == post.category)) categoryList.push(post.category)
    })
        
    return categoryList
}

function getCategoryPost(category){

    const postList = []

    posts.forEach(post => {

        if(category == "all"){

            if(post.published) postList.push(post)
        }
        else{

            if(post.published && post.category == category) postList.push(post)
        }
    })

    return postList
}

function capitalize(text){

    const textArray = text.split("")

    return textArray.map((letter, index) => {

        if(index == 0) return letter.toUpperCase()

        else return letter

    }).join("")
}

function getName(text){

    const textArray = text.split("-")

    return textArray.map( word => capitalize(word)).join(" ")
}

function getDate(date){

    const dateArray = date.split("-")

    return months[+dateArray[1]-1]+" "+dateArray[2]+ ", "+dateArray[0]   
}

function latestPost(post1, post2){

    const date1 = post1.date.split("-")

    const date2 = post2.date.split("-")

    if(+date1[0] > +date2[0]) return 1

    else  if(+date1[0] < +date2[0]) return 2

    else if(+date1[1] > +date2[1]) return 1

    else  if(+date1[1] < +date2[1]) return 2

    else  if(+date1[2] > +date2[2]) return 1

    else  if(+date1[2] < +date2[2]) return 2

    else return 1
}

function sortPost(posts){

    for(let i=0; i<posts.length-1; i++){

        for(let j=0; j<posts.length-1-i; j++){

            if(latestPost(posts[j], posts[j+1]) != 1){

                const temp = posts[j]

                posts[j] = posts[j+1]

                posts[j+1] = temp
            }
        }
    }
}


module.exports = { getName, getDate, sortPost, getCategoryList, getCategoryPost }

