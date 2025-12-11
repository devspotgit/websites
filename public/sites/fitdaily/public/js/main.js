


const openMenuButton = document.querySelector(".header-content > button")

const closeMenuButton = document.querySelector(" .menu-wrapper > button") 

const overlay = document.querySelector(".header > div:first-child")

const menuWrapper = document.querySelector(".menu-wrapper")

const header = document.querySelector(".header")


openMenuButton.addEventListener("click", () => {

    menuWrapper.setAttribute("open", "")

    overlay.setAttribute("open", "")
})

closeMenuButton.addEventListener("click", () => {

    menuWrapper.removeAttribute("open")

    overlay.removeAttribute("open")
})

if(scrollY >= 20){
    
    header.setAttribute("scroll", "")
}

window.addEventListener("scroll", () => {

    if(scrollY >= 20){

        header.setAttribute("scroll", "")
    }
    else{

        if(header.hasAttribute("scroll")) header.removeAttribute("scroll")
    }

})
