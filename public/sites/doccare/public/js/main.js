


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

function carousel(slides, controls){

    let busy = false

    let ratio = 3

    function init(){

    }

    function farLeft(){

    }

    function farRight(){

    }

    function next(){

    }

    function prev(){

    }
}




headerControl()


assetControl()



