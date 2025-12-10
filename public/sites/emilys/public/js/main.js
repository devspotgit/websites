


function controlCarousel(slides, controls){

    let currentSlideIndex = 0

    let busy = false

    function init(){

        slides.forEach((slide, index) => {

            slide.style.left = index * 100 + "%"

            slide.style.transition = "left 0.5s"
        })

        controls[currentSlideIndex].setAttribute("selected", "")
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

    function next(steps){

        // <-

        // update busy
        busy = true

        // update current slide index
        controls[currentSlideIndex].removeAttribute("selected")

        for(let i=0; i<steps; i++){

            if(currentSlideIndex == slides.length - 1){

                currentSlideIndex = 0
            }
            else{

                currentSlideIndex ++
            }
        }

        controls[currentSlideIndex].setAttribute("selected", "")


        // moving all slides to the left
        slides.forEach(slide => {

            const pos = +slide.style.left.split("%")[0]

            slide.style.left = pos - (steps * 100) + "%"
        })

        // wait for slides to settle and deactivate the transition
        setTimeout(()=>{

            slides.forEach(slide => {

                slide.style.transition = ""
            })

            // move far left slides to far right
            for(let i=0; i<steps; i++){

                const farLeftSlide = farLeft()

                const farRightSlide = farRight()

                const farRightPos = +farRightSlide.style.left.split("%")[0]

                farLeftSlide.style.left = farRightPos + 100 + "%"
            }

            // wait for the slide to settle and reactivate transition
            setTimeout(() => {

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

        // update current slide index
        controls[currentSlideIndex].removeAttribute("selected")

        for(let i=0; i<steps; i++){

            if(currentSlideIndex == 0){

                currentSlideIndex = slides.length - 1
            }
            else{

                currentSlideIndex --
            }
        }

        controls[currentSlideIndex].setAttribute("selected", "")

        // deactivate transition
        slides.forEach(slide => {

            slide.style.transition = ""
        })

        // move the far right slides to the far left
        for(let i=0; i<steps; i++){

            const farRightSlide = farRight()

            const farLeftSlide = farLeft()

            const farLeftPos = +farLeftSlide.style.left.split("%")[0]

            farRightSlide.style.left = farLeftPos - 100 + "%"
        }

        // wait for the slides to settle and reactivate the transition
        setTimeout(() => {

            slides.forEach(slide => {

                slide.style.transition = "left 0.5s"
            })

            // move all slides to the right
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

            if(!busy){

                if(index != currentSlideIndex){
    
                    if(currentSlideIndex < index){
    
                        next(index - currentSlideIndex)
                    }
                    else{
    
                        prev(currentSlideIndex - index)
                    }
                }
            }
        })
    })

    init()
}


function autoCarousel(slides){

    let ratio = 3

    const marginInline = 20

    let interval = null


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

    function next(){

        // <-

        // move slide to the left
        slides.forEach(slide => {

            const pos = +slide.style.left.split("%")[0]

            slide.style.left = pos - (100 / ratio) + "%"
        })

        // wait for slide to settle before deactivating transition
        setTimeout(() => {

            slides.forEach(slide => {

                slide.style.transition = ""
            })

            const farLeftSlide = farLeft()

            const farRightSlide = farRight()

            const farRightPos = +farRightSlide.style.left.split("%")[0]

            farLeftSlide.style.left = farRightPos + (100 / ratio) + "%"

            // wait for slide to settle and reactivate transition
            setTimeout(() => {

                slides.forEach(slide => {

                    slide.style.transition = "left 0.5s"
                })

            }, 100)
            
        }, 600)
    }

    function init(){

        slides.forEach((slide, index) => {

            slide.style.width = `calc(100% / ${ratio} - ${2 * marginInline}px)`

            slide.style.marginInline = "20px"

            slide.style.left = index * (100 / ratio) + "%"

            slide.style.transition = "left 0.5s"
        })

        interval = setInterval(() => {

            next()

        }, 3000)
    }

    const resize = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 900){

                    if(ratio != 3){

                        clearInterval(interval)

                        ratio = 3

                        init()
                    }

                }
                else if(entry.target.offsetWidth > 600 && entry.target.offsetWidth < 900 ){

                    if(ratio != 2){

                        clearInterval(interval)

                        ratio = 2

                        init()
                    }
                }
                else{

                    if(ratio != 1){

                        clearInterval(interval)

                        ratio = 1

                        init()
                    }

                }
            }
        })
    })

    resize.observe(document.body)

    init()
}


const openMenu = document.querySelector(".open-menu")

const menuWrapper = document.querySelector(".menu-wrapper")

const trendingSlides = document.querySelectorAll(".trending .product-item")

const testimonialSlides = document.querySelectorAll(".testimonials .testimonial-item")

const testimonialControls = document.querySelectorAll(".testimonials .control")


openMenu.addEventListener("click", ()=>{

    if(menuWrapper.hasAttribute("open")) menuWrapper.removeAttribute("open")
    
    else menuWrapper.setAttribute("open", "")
})

if(trendingSlides.length != 0) autoCarousel(trendingSlides)

if(testimonialControls.length != 0 && testimonialControls.length != 0) controlCarousel(testimonialSlides, testimonialControls)



