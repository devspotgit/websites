

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


function carousel(){

    const slides = document.querySelectorAll(".testimonial-item")

    const controls = document.querySelectorAll(".testimonial-control > button")

    let currentIndex = 0

    let busy = false

    function init(){

        slides.forEach((slide, index) => {

            slide.style.left = index * 100 + "%"

            slide.style.transition = "left 0.5s"
        })

        controls[currentIndex].setAttribute("selected", "")
    }

    function farLeft(){

        let farLeftPos = null

        let farLeftSlide = null

        slides.forEach(slide => {

            const pos = +slide.style.left.split("%")[0]

            if(farLeftPos == null || pos < farLeftPos){

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

            if(farRightPos == null || pos > farRightPos){

                farRightPos = pos

                farRightSlide = slide
            }
        })

        return farRightSlide
    }

    function next(steps){

        // <-

        // update busy
        busy = true

        // update current index
        controls[currentIndex].removeAttribute("selected")
        
        for(let i=0; i<steps; i++){

            if(currentIndex == slides.length - 1) currentIndex = 0

            else currentIndex ++
        }

        controls[currentIndex].setAttribute("selected", "")

        // move all slides to the left
        slides.forEach(slide => {

            const pos = +slide.style.left.split("%")[0]

            slide.style.left = pos - (steps * 100) + "%"
        })

        // wait for the slides to settle
        setTimeout(() => {

            // deactivate transition
            slides.forEach(slide => {

                slide.style.transition = ""
            })

            // move far left slides to the right
            for(let i=0; i<steps; i++){

                const farLeftSlide = farLeft()

                const farRightSlide = farRight()

                const farRightPos = +farRightSlide.style.left.split("%")[0]

                farLeftSlide.style.left = farRightPos + 100 + "%"
            }

            // wait for slides to settle
            setTimeout(() => {

                // activate transition
                slides.forEach(slide => {

                    slide.style.transition = "left 0.5s"
                })

                // update busy
                busy = false

            }, 100)

        }, 600)

    }

    function prev(steps){

        // ->

        // update busy
        busy = true

        // update current index
        controls[currentIndex].removeAttribute("selected")
        
        for(let i=0; i<steps; i++){

            if(currentIndex == 0) currentIndex = slides.length - 1

            else currentIndex --
        }

        controls[currentIndex].setAttribute("selected", "")

        // deactivate transition
        slides.forEach(slide => {

            slide.style.transition = ""
        })

        // move far right slides to the left
        for(let i=0; i<steps; i++){

            const farRightSlide = farRight()

            const farLeftSlide = farLeft()

            const farLeftPos = +farLeftSlide.style.left.split("%")[0]

            farRightSlide.style.left = farLeftPos - 100 + "%"
        }

        // wait for the slides to settle
        setTimeout(()=>{

            // activate transition
            slides.forEach(slide => {

                slide.style.transition = "left 0.5s"
            })

            // move all the slides to the right
            slides.forEach(slide => {

                const pos = +slide.style.left.split("%")[0]

                slide.style.left = pos + (steps * 100) + "%"
            })

            // update busy
            busy = false

        }, 100)

    }

    controls.forEach((control, index) => {

        control.addEventListener("click", ()=>{

            if(index != currentIndex && busy == false){

                if(index > currentIndex){

                    next(index - currentIndex)
                }
                else{

                    prev(currentIndex - index)
                }
            }
        })
    })

    init()
}




export { headerControl, carousel }

