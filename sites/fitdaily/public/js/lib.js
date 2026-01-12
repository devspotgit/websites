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

function slider(){

    const slides = document.querySelectorAll(".testimonial-item")

    const prev = document.querySelector(".testimonial-control button:first-child")

    const next = document.querySelector(".testimonial-control button:last-child")

    let busy = false

    function init(){

        slides.forEach((slide, index) => {

            slide.style.left = index * 100 + "%"

            slide.style.transition = "left 0.5s"
        })
    }

    function farLeft(){

        let farLeftPos = null

        let farLeftSlide = null

        slides.forEach(slide => {

            const pos = +slide.style.left.split("%")[0]

            if(farLeftPos == null || farLeftPos > pos){

                farLeftPos = pos

                farLeftSlide = slide
            }
        })

        return farLeftSlide
    }

    function farRight(){

        let farRightPos = null

        let farRightSlide = null

        slides.forEach(slide => {

            const pos = +slide.style.left.split("%")[0]

            if(farRightPos == null || farRightPos < pos){

                farRightPos = pos

                farRightSlide = slide
            }
        })

        return farRightSlide
    }

    function _next(){

        // <-

        // update busy
        busy = true

        // move all sliders to the left
        slides.forEach(slide => {

            const pos = +slide.style.left.split("%")[0]

            slide.style.left = pos - 100 + "%"
        })

        // wait for the slides to settle
        setTimeout(() => {

            // deactivate transition
            slides.forEach(slide => {

                slide.style.transition = ""
            })

            // moving the far left slide to the far right
            const farLeftSlide = farLeft()

            const farRightSlide = farRight()

            const farRightPos = +farRightSlide.style.left.split("%")[0]

            farLeftSlide.style.left = farRightPos + 100 + "%"

            // wait for the slide to settle
            setTimeout(() => {

                // reactivate transition
                slides.forEach(slide => {

                    slide.style.transition = "left 0.5s"
                })

                // update busy
                busy = false

            }, 100)

        }, 500)
    }

    function _prev(){

        // ->

        // update busy
        busy = true

        // deactivate transition
        slides.forEach(slide => {

            slide.style.transition = ""
        })

        // move the far right slide to the far left
        const farRightSlide = farRight()

        const farLeftSlide = farLeft()

        const farLeftPos = +farLeftSlide.style.left.split("%")[0]

        farRightSlide.style.left = farLeftPos - 100 + "%"

        // wait for the slide to settle
        setTimeout(() => {

            // reactivate the transition
            slides.forEach(slide => {

                slide.style.transition = "left 0.5s"
            })

            // move all the slides to right
            slides.forEach(slide => {

                const pos = +slide.style.left.split("%")[0]

                slide.style.left = pos + 100 + "%"
            })

            // update busy
            busy = false

        }, 100)

    }

    next.addEventListener("click", () => {

        if(!busy) _next()
    })

    prev.addEventListener("click", () => {

        if(!busy) _prev()
    })

    init()
}

export { headerControl, carousel, slider }

