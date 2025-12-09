


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


openMenu.addEventListener("click", ()=>{

    if(menuWrapper.hasAttribute("open")) menuWrapper.removeAttribute("open")
    
    else menuWrapper.setAttribute("open", "")
})

if(trendingSlides.length != 0) autoCarousel(trendingSlides)



