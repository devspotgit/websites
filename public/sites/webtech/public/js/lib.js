

function headerControl(){

    const openNav = document.querySelector(".header-body > button:first-of-type")

    const closeNav = document.querySelector(".header-body > button:last-of-type")

    const nav = document.querySelector(".nav")

    openNav.addEventListener("click", () => {

        openNav.setAttribute("hide", "")

        closeNav.setAttribute("show", "")

        nav.setAttribute("open", "")
    })

    closeNav.addEventListener("click", () => {

        closeNav.removeAttribute("show")

        openNav.removeAttribute("hide")

        nav.removeAttribute("open")

    })
}

export { headerControl }

