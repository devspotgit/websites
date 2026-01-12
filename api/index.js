
const express = require("express")

const templates = require("../templates.js")

const path = require("path")

const fs = require("fs")

const archiver = require("archiver")

const app = express()

const { getLastPosts } = require("../api.js")


app.use(express.json())

app.get("/", (req, res) => {

    res.redirect("/categories/all")
})

app.get("/categories/:id", (req, res) => {

    res.send(templates.categoryPage(req.params.id))
})

app.get("/sites/:sitename/:pagename", (req, res) => {

    const map = require("../sites/"+req.params.sitename+"/map.js")  
    
    res.send(map[req.params.pagename]())
})

app.get("/download/:sitename", (req, res) => {

    const archive = archiver("zip", { zlib: { level: 9 } })

    res.setHeader("Content-Disposition", "attachment; filename="+req.params.sitename+".zip")

    res.setHeader("Content-Type", "application/zip")

    archive.pipe(res)

    const routes = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "sites", req.params.sitename, "path.json"), "utf-8"))

    routes.forEach(route => {

        archive.file(path.join(__dirname, "..", "sites", req.params.sitename, ...route), { name: path.join(...route) })
    })
    
    archive.file(path.join(__dirname, "..", "generator", "readme.txt"), { name: "readme.txt" })

    archive.file(path.join(__dirname, "..", "generator", "generator.js"), { name: "generator.js" })

    archive.finalize()
})

app.get("/getlatest/:count", (req, res) => {

    res.json( getLastPosts(req.params.count))
})

module.exports = app



