const navbar=document.getElementById("navbar")
const caloffset=navbar.offsetTop
window.addEventListener("scroll",()=>{
    if(window.scrollY>caloffset){
        navbar.classList.add("scrolled")
    }
    else{
        navbar.classList.remove("scrolled")
    }
})