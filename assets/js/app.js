const header_image = document.querySelectorAll('.header-bg img')

function slider(){
    let i = 0;
    setInterval(function(){
        if ( i < header_image.length-1){
            header_image[i].classList.remove("bg-active")
            header_image[i+1].classList.add("bg-active")
        i++
        }else {
            header_image[i].classList.remove("bg-active")
            header_image[0].classList.add("bg-active")
            i = 0
        }
        
    }, 3000)
}
slider()