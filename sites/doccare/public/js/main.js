


/* --------------------------- header control ----------------------------- */


function headerControl(){

    const control = document.querySelector(".header button")
    
    const navWrap = document.querySelector(".nav-wrap")
    
    control.addEventListener("click", () => {
    
        if(navWrap.hasAttribute("open")) navWrap.removeAttribute("open")
    
        else navWrap.setAttribute("open", "")
    })
}


/* --------------------------- asset control ----------------------------- */

function assetControl(){

    const assets = document.querySelectorAll(".asset")

    const controls = document.querySelectorAll(".assets-top  button")

    let currentIndex = 0;

    assets[currentIndex].setAttribute("active", "")

    controls[currentIndex].setAttribute("active", "")

    controls.forEach((item, index) => {

        item.addEventListener("click", () => {

            if(index != currentIndex){
    
                assets[currentIndex].removeAttribute("active")
    
                controls[currentIndex].removeAttribute("active")
    
                currentIndex = index
    
                assets[currentIndex].setAttribute("active", "")
    
                controls[currentIndex].setAttribute("active", "")
            }
        })
    })
}

/* --------------------------- carousel ----------------------------- */

function carousel(slides, controls, auto, fixRatio){

    let busy = false

    let ratio = fixRatio ? 1 : 3

    const marginInline = fixRatio ? 0 : 10

    let interval = null

    function init(){

        slides.forEach((slide, index) => {

            slide.style.width = `calc( 100% / ${ratio} - ${marginInline * 2}px )`

            slide.style.marginInline = marginInline + "px"

            slide.style.left = index * 100 / ratio + "%"

            slide.style.transition = "left 0.5s" 
        })

        if(auto){

            if(interval) clearInterval(interval)

            interval = setInterval(() => {

                next()

            }, 2500)
        }
    }

    function farLeft(){

        let farLeftSlide = null

        slides.forEach(slide => {

            const pos = +slide.style.left.split("%")[0]

            if(farLeftSlide == null) farLeftSlide = slide

            else{

                const currentPos = +farLeftSlide.style.left.split("%")[0]

                if(pos < currentPos) farLeftSlide = slide
            }
        })

        return farLeftSlide
    }

    function farRight(){

        let farRightSlide = null

        slides.forEach(slide => {

            const pos = +slide.style.left.split("%")[0]

            if(farRightSlide == null) farRightSlide = slide

            else{

                const currentPos = +farRightSlide.style.left.split("%")[0]

                if(pos > currentPos) farRightSlide = slide
            }
        })

        return farRightSlide
    }

    function next(){

        // <-

        busy = true

        // moving slides to the left

        slides.forEach(slide => {

            const pos = +slide.style.left.split("%")[0]

            slide.style.left = pos - (100 / ratio) + "%"
        })

        // waiting slides to settle

        setTimeout(() => {

            // deactivate transition
            
            slides.forEach(slide => {
    
                slide.style.transition = ""
            })

            // moving far left slide to the far right

            const farLeftSlide = farLeft()

            const farRightSlide = farRight()

            const farRightPos = +farRightSlide.style.left.split("%")[0]

            farLeftSlide.style.left = farRightPos + (100 / ratio) + "%"

            // waiting for slides to settle

            setTimeout(() => {

                // reactivate transition

                slides.forEach(slide => {

                    slide.style.transition = "left 0.5s"
                })

                busy = false

            }, 100)

        }, 600)
    }

    function prev(){

        // ->

        busy = true

        // deactivate transition

        slides.forEach(slide => {

            slide.style.transition = ""
        })

        // moving the far right slide to the far left

        const farRightSlide = farRight()

        const farLeftSlide = farLeft()

        const farLeftPos = +farLeftSlide.style.left.split("%")[0]

        farRightSlide.style.left = farLeftPos - (100 / ratio) + "%"

        // waiting for slides to settle

        setTimeout(() => {

            // reactivate transition
            
            slides.forEach(slide => {

                slide.style.transition = "left 0.5s"
            })

            // moving slides to the right

            slides.forEach(slide => {

                const pos = +slide.style.left.split("%")[0]

                slide.style.left = pos + (100 / ratio) + "%"
            })

            busy = false

        }, 100)
    }

    if(controls){

        // prev

        controls[0].addEventListener("click", () => {

            if(!busy) prev()
        })

        // next

        controls[1].addEventListener("click", () => {

            if(!busy) next()
        })
    }

    const res = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 900){

                    if(ratio != 3 && !fixRatio) {

                        ratio = 3
    
                        init()
                    }
                }
                else if(entry.target.offsetWidth >= 600 && entry.target.offsetWidth < 900){

                    if(ratio != 2 && !fixRatio) {

                        ratio = 2
    
                        init()
                    }
                }
                else{

                    if(ratio != 1 && !fixRatio) {

                        ratio = 1
    
                        init()
                    }
                }
            }
        })
    })

    res.observe(document.body)

    init()
}



// testimonials

const testimonials = document.querySelectorAll(".testimonial")

carousel(testimonials, null, true, true)

// team

const team = document.querySelectorAll(".team-item")

const teamControls = document.querySelectorAll(".team-control button")

carousel(team, teamControls, false, false)


headerControl()


assetControl()



