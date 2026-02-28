
function progress(bar,target){
    let progress=0;
    const interval=setInterval(()=>{
        if(progress>=target){
            clearInterval(interval)
        }
        else{
            progress=progress+1;
            bar.style.width=progress+"%"
        }
    },30)
}
const ts=document.querySelectorAll("#tools span");
const skills=[
    { id: "skill-1", name: "JavaScript", percentage:80, color:"rgb(250, 206, 45),rgb(227, 172, 43)"},
    { id: "skill-2", name: "React", percentage:70,color:"rgb(69, 137, 255),rgb(48, 102, 240)"},
    { id: "skill-3", name: "Node JS", percentage:80 ,color:"rgb(112, 179, 255),rgb(68, 127, 252)"},
    { id: "skill-4", name: "Express JS", percentage:70 ,color:"rgb(35, 222, 129),rgb(27, 179, 85)"},
    { id: "skill-5", name: "TypeScript", percentage:80 ,color:"rgb(40, 209, 119),rgb(54, 153, 245)"},
    { id: "skill-6", name: "Mongodb", percentage:60 ,color:"rgb(91, 101, 115),rgb(55, 65, 79)"},
    { id: "skill-7", name: "REST APIs", percentage:90 ,color:"rgb(49, 181, 100),rgb(46, 135, 86)"},
    { id: "skill-8", name: "Tailwind CSS", percentage:80 ,color:"rgb(70, 106, 250),rgb(158, 52, 250)"},
    { id: "skill-9", name: "Bootstrap", percentage:70 ,color:"rgb(255, 156, 56),rgb(252, 94, 91)"},
    { id: "skill-10", name: "SQL", percentage:80 ,color:"rgb(237, 111, 199),rgb(172, 65, 242)"},
    { id: "skill-11", name: "Python", percentage:70 ,color:"rgb(69, 153, 255),rgb(45, 197, 227)"},
    { id: "skill-12", name: "NextJs", percentage:40 ,color:"rgb(255, 126, 28),rgb(245, 185, 47)"}
]
skills.forEach(skill=>{
    const sc=document.getElementById("con")
    const dsc=document.createElement("div");
    dsc.classList.add("skillcontain")
    dsc.id="visibleid"
    dsc.innerHTML=`
    <div class="txt">
    <span>${skill.name}</span>
    <span>${skill.percentage}%</span>
    </div>
    <div class="progress">
    <div class="rising" id="${skill.id}" style="background:linear-gradient(to right,${skill.color}); width:0%"></div>
    </div>
    `
    sc.appendChild(dsc)  
})
const observerr=new IntersectionObserver((entity,obs)=>{
    entity.forEach(entry=>{
        if(entry.isIntersecting){
         const bar = entry.target; 
            const skill = skills.find(s => s.id === bar.id);    
              progress(bar, skill.percentage);
         obs.unobserve(entry.target)
        }
    })
},{ threshold: 0.2 })
skills.forEach(skill => {
    const bar = document.getElementById(skill.id);
    observerr.observe(bar);
});
const tools = [
    "VS Code", "GitHub", "Bootstrap", "LambdaTest", "Jest", "Postman", 
    "Chrome DevTools ", "Vite", "ImageOptim", "Material UI", "Linux",
    "GSAP ", "npm", "Accessibility Tools (a11y)", "Figma"
  ];
const soft_skills = [
     "Problem Solving", "Team Leadership", "Effective Communication", 
    "Adaptability", "Mentoring & Knowledge Sharing", "Strategic Thinking", "Time Management"
  ];
const tt=document.getElementById("rtt")
tools.forEach((tool,index)=>{
    const sp=document.createElement("span")
   sp.style.animationDelay=`${index*0.2}s`
    sp.textContent=tool
    tt.appendChild(sp)
})
const tb=document.getElementById("rbs")
soft_skills.forEach((skill,index)=>{
    const sp=document.createElement("span")
    sp.style.animationDelay=`${index*0.4}s`
    sp.textContent=skill
    tb.appendChild(sp)
})


