function headerControl(){

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

}

function carousel(){

    let currentIndex = 0

    const trainers = document.querySelectorAll(".trainer-item")

    const trainerSelectors = document.querySelectorAll(".trainer-selector > button")

    trainers.forEach(trainer => {

        trainer.style.zIndex = "0"
    })

    trainers[currentIndex].setAttribute("selected", "")
    
    trainers[currentIndex].style.zIndex = "1"

    trainerSelectors[currentIndex].setAttribute("selected", "")

    trainerSelectors.forEach((item, index) => {

        item.addEventListener("click", () => {

            if(index != currentIndex){

                trainers[currentIndex].removeAttribute("selected")

                trainers[currentIndex].style.zIndex = "0"

                trainerSelectors[currentIndex].removeAttribute("selected")

                currentIndex = index

                trainers[currentIndex].setAttribute("selected", "")

                trainerSelectors[currentIndex].setAttribute("selected", "")

                trainers[currentIndex].style.zIndex = "1"
            }
        })
    })
}

export { headerControl, carousel }

