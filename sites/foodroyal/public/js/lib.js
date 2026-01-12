

function headerControl(){

    const navControl = document.querySelector(".header-body > button")

    const navWrapper = document.querySelector(".nav-wrapper")

    navControl.addEventListener("click", () => {

        if(navWrapper.hasAttribute("open")) navWrapper.removeAttribute("open")
        
        else navWrapper.setAttribute("open", "")
    })
}

function carousel(){

    const controls = document.querySelectorAll(".product-control > button")

    const slides = document.querySelectorAll(".product-item")

    let ratio = 3

    const marginInline = 10

    let busy = false

    function init(){

        slides.forEach((slide, index) => {

            slide.style.left = index * 100 / ratio + "%"

            slide.style.width = `calc(100% / ${ratio} - ${2 * marginInline}px)`

            slide.style.marginInline = marginInline + "px"

            slide.style.transition = "left 0.5s"
        })
    }

    function farLeft(){

        let farLeftSlide = null

        let farLeftPos = null

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

        let farRightSlide = null

        let farRightPos = null

        slides.forEach(slide => {

            const pos = +slide.style.left.split("%")[0]

            if(farRightPos == null || farRightPos < pos){

                farRightPos = pos

                farRightSlide = slide
            }
        })

        return farRightSlide
    }

    function next(){

        // <-

        busy = true

        // move all slides to the left
        slides.forEach(slide => {

            const pos = +slide.style.left.split("%")[0]

            slide.style.left = pos - 100 / ratio + "%" 
        })

        // wait for the slides to settle
        setTimeout(()=>{

            // remove transition
            slides.forEach(slide => {

                slide.style.transition = ""
            })

            // move the far left slide to the far right
            const farLeftSlide = farLeft()
            
            const farRightSlide = farRight()

            const farRightPos = +farRightSlide.style.left.split("%")[0]

            farLeftSlide.style.left = farRightPos + 100 / ratio + "%"

            // wait for the slide to settle
            setTimeout(()=>{

                // add transition
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

        // remove transition
        slides.forEach(slide => {

            slide.style.transition = ""
        })

        // move the far right slide to the far left
        const farRightSlide = farRight()

        const farLeftSlide = farLeft()

        const  farLeftPos = +farLeftSlide.style.left.split("%")[0]

        farRightSlide.style.left = farLeftPos - 100 / ratio + "%"

        // wait for the slide to settle
        setTimeout(()=>{

            // add transition
            slides.forEach(slide => {

                slide.style.transition = "left 0.5s"
            })

            // move all slides to the right
            slides.forEach(slide => {

                const pos = +slide.style.left.split("%")[0]

                slide.style.left = pos + 100 / ratio + "%"
            })

            // wait for slides to settle
            setTimeout(() => {

                busy = false

            }, 600)

        }, 100)

    }

    controls.forEach((control, index) => {

        control.addEventListener("click", ()=>{

            if(index == 0 && !busy) prev()

            else if(index == 1 && !busy) next()
        })
    })

    const res = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth >= 900){

                    if(ratio != 3){

                        ratio = 3

                        init()
                    }
                }
                else if(entry.target.offsetWidth >= 600 && entry.target.offsetWidth < 900){

                    if(ratio != 2){

                        ratio = 2

                        init()
                    }
                }
                else{

                    if(ratio != 1){

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

function testimonial(){

    const testimonialItems = document.querySelectorAll(".testimonial-item")

    const testimonialList = document.querySelector(".testimonial-list")

    const res = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == document.body){

                if(entry.target.offsetWidth <= 700){

                    testimonialItems.forEach( item => {

                        item.style = ""
                    })

                    testimonialList.style.gridTemplateColumns = "repeat(auto-fill, minmax(250px, 1fr))"
                }

                else{

                    testimonialList.style.gridTemplateColumns = `repeat(${testimonialItems.length}, 1fr)`

                    testimonialItems.forEach((item, index) => {

                        item.style.gridColumnStart = index + 1

                        item.style.gridRowStart = index + 1 

                        item.style.position = "sticky"

                        item.style.top = "100px"
                    })
                }
            }
        })
    })

    res.observe(document.body)
}

export { headerControl, carousel, testimonial }

