

function headerControl(){

    const openNav = document.querySelector(".header-top button:first-of-type")

    const closeNav = document.querySelector(".header-top button:last-of-type")

    const header = document.querySelector(".header")

    const headerWrap = document.querySelector(".header-wrap")

    openNav.addEventListener("click", () => {

        header.setAttribute("open", "")
    })

    closeNav.addEventListener("click", () => {

        header.removeAttribute("open")
    })

    window.addEventListener("scroll", () => {

        if(scrollY >= 20) headerWrap.setAttribute("scroll", "")
        
        else headerWrap.removeAttribute("scroll")
    })

    if(scrollY >= 20) headerWrap.setAttribute("scroll", "")
        
    else headerWrap.removeAttribute("scroll")

}

function aboutControl(){

    const items = document.querySelectorAll(".about-body-item")

    const controls = document.querySelectorAll(".about-item-title")

    let currentIndex = 0

    items[currentIndex].setAttribute("open", "")

    controls.forEach((item, index) => {

        item.addEventListener("click", () => {

            if(index != currentIndex){

                items[currentIndex].removeAttribute("open")

                currentIndex = index

                items[currentIndex].setAttribute("open", "")
            }
        })
    })
}

function assetsControl(){

    const assetValueRef = Array.from(document.querySelectorAll(".asset :first-child"))

    const finalValue = assetValueRef.map(item => +item.innerHTML)

    const currentValue = assetValueRef.map(() => 0)

    const isComplete = assetValueRef.map(() => false)

    const assetsWrap = document.querySelector(".assets-wrap")

    let interval = null

    const inter = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.target == assetsWrap && entry.isIntersecting){

                inter.unobserve(assetsWrap)

                interval = setInterval(() => {

                    assetValueRef.forEach((_, index) => {

                        assetValueRef[index].innerHTML = currentValue[index]

                        if(currentValue[index] != finalValue[index]){

                            currentValue[index]++    
                        }
                        else{

                            isComplete[index] = true
                        }
                    })

                    let temp = true

                    isComplete.forEach(res => {
                        
                        temp = temp && res
                    } )

                    if(temp) clearInterval(interval)

                }, 25)
            }
        })
    })

    inter.observe(assetsWrap)
}


headerControl()

aboutControl()

assetsControl()

