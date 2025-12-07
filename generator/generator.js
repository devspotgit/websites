
const map = require("./map.js")

const fs = require("fs")

const path = require("path")

const root = "site"

try{

    if(fs.existsSync(path.join(__dirname, root))) fs.rmSync(path.join(__dirname, root), { recursive:true, force:true })
    
    fs.mkdirSync(path.join(__dirname, root), { recursive:true })

    Object.keys(map).forEach(filename => {

        fs.writeFileSync(path.join(__dirname, root, filename), map[filename]())
    })

    fs.cpSync(path.join(__dirname, "public"), path.join(__dirname, root, "public"), { recursive:true })
}

catch(error){

    console.log(error)
}


