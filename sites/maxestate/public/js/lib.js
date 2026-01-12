

function headerControl(){

    const closeNav = document.querySelector(".header-body > button:last-of-type")

    const openNav = document.querySelector(".header-body > button:first-of-type")

    const nav = document.querySelector(".nav")

    closeNav.addEventListener("click", () => {

        nav.removeAttribute("open")

        closeNav.removeAttribute("open")

        openNav.removeAttribute("open")
    })

    openNav.addEventListener("click", () => {

        nav.setAttribute("open", "")

        closeNav.setAttribute("open", "")

        openNav.setAttribute("open", "")
    })
}


export { headerControl }

