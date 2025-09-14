const anchor=document.querySelectorAll("#co1,#co2,#co3");
anchor.forEach((el,index)=>{
    
    el.style.animationDelay=`${index*0.2}s`
})