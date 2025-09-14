
const aniele=document.querySelectorAll("#lpp1,#lhh2,#lpp2,#lhh1,.btns,#h,.abp,#lp1,#lp2,#lh3,.skills,#sp,.indi,#sh2,#shp,#skillsl,#skillrt,#srb,#srb,#ehh,#ehp,#elh,#ele,#elc,#elc1,#elc2,#elc3,#erh,#ppe1,#ppe2,#ppe3,#chh,#chp1,#colt,.connectrl,#colb,#cor,#crh,#cortt,#conrnr,#cosub,#coms,#cobu,#featurdh,#featuredheading,#featpara,#featend,#p-1,#p-2,#p-3,#p-4,#p-5,#feabuttons")
const observer=new IntersectionObserver((entries,obs)=>{
    entries.forEach(entery=>{
        if(entery.isIntersecting){
            entery.target.classList.add("show")
            obs.unobserve(entery.target)

        }
    },{
        threshold:0
    })
})
aniele.forEach(element=>{
    element.style.opacity="0"
})
aniele.forEach(el=>observer.observe(el))

function sendemail(){
        let n=document.getElementById("fn").value;
        let email=document.getElementById("fe").value;
        let subject=document.getElementById("fsub").value;
        let message=document.getElementById("fm").value;
        if(!n||!email ||!subject ||!message){
            alert("⚠️ Please fill all required fields.")
            return
        }
        else{
            let parameters={
                name:n,
                email:email,
                subject:subject,
                message:message
            }
            emailjs.send("service_ch2louc","template_ukr3fc8",parameters).then(alert("Email sent!"))
            document.getElementById("jay").reset()
        }


    
}