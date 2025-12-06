

const openButton = document.querySelector(".header button")

const closeButton = document.querySelector(".category-list-header button")

const overlay = document.querySelector(".overlay")

const categoryList = document.querySelector(".category-list")


openButton.addEventListener("click", () => {

    categoryList.setAttribute("open", "")

    overlay.setAttribute("open", "")
})

closeButton.addEventListener("click", () => {

    categoryList.removeAttribute("open")

    overlay.removeAttribute("open")
})

overlay.addEventListener("click", () => {

    categoryList.removeAttribute("open")

    overlay.removeAttribute("open")
})

