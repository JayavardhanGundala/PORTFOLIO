let sboxes=document.getElementById("boxes")

const arr=["Frontend Development","React.js & State Management","API Integration","Version Control (Git)","CSS Frameworks (Bootstrap, Tailwind)","Node.js","Express.js","MongoDB","SQL","CSS Frameworks (Bootstrap, Tailwind)","Python","Data Structures ","Problem Solving"];
arr.forEach(text=>{
    let t=document.createElement("span")
    t.textContent=text
    t.id="sp"
    sboxes.appendChild(t)

})
let sp=document.querySelectorAll("#boxes span")
sp.forEach((span,index)=>{
    span.style.animationDelay=`${index *0.1}s`
})
let indivisual=document.querySelectorAll(".indi");
indivisual.forEach((indi,index)=>{
    indi.style.animationDelay=`${index *0.2}s`
})
