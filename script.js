let cursor = document.querySelector(".cursor");
let cursor2=document.querySelector(".cursor-trail");
document.addEventListener("mousemove",(e)=>{
  let x =e.clientX;
  let y =e.clientY;
   cursor.style.top = `${y}px`
    cursor.style.left = `${x}px`
    setTimeout(()=>{
        cursor2.style.top = `${y}px`
        cursor2.style.left = `${x}px`
    },80)

})

const navbar = document.querySelector("#navbar");
document.addEventListener("scroll",()=>{
    if(window.scrollY>50){
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
})

let typing = document.querySelector("#typed-text")
let text_array =["IT Student & Web Developer",
  "Building Ideas Into Reality",
  "Future AI Developer"]

let string_index=0;
let char_index = 0;
let isDeleting= false;
function typingeffect(){
  
    let string = text_array[string_index];
    if(isDeleting==false){
        typing.textContent=string.slice(0,char_index);
        char_index++;
    }
    if(char_index==0 && isDeleting==true){
        // typing.textContent =string.slice(0,char_index);
        string_index++;
        isDeleting=false;
    }
    if(char_index==string.length){
        isDeleting=true;
    }
    if(isDeleting==true){
        typing.textContent=string.slice(0,char_index);
        char_index--;
    }
    setTimeout(()=>{
        typingeffect();
    },120)
}
typingeffect();

const hamburger=document.querySelector("#hamburger");
const navlinks=document.querySelector(".nav-links");
hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navlinks.classList.toggle("open")
})
const alllinks = document.querySelectorAll(".nav-links a");
alllinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        navlinks.classList.remove("open");
        hamburger.classList.remove("active");
    })
})

const reveal = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("visible");
            // visible class add karo entry.target pe
        }
    })
})
reveal.forEach((element)=>{
    observer.observe(element);
})

const skill = document.querySelectorAll(".skill-bar");
const skillObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        let data_set=entry.target.dataset.width;
        let width =0;
        if(entry.isIntersecting){
        entry.target.style.width = `${data_set}%`
        }
    })
})
skill.forEach((e)=>{
    skillObserver.observe(e)
})

const stat = document.querySelectorAll(".stat-num");
const statobserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        let data_set = entry.target.dataset.target;
        if(entry.isIntersecting){
            let count= 0;
            let timer=setInterval(()=>{
                count++;
                entry.target.textContent=count
                if(entry.target.textContent==data_set){
                    clearInterval(timer);
                }
            },60)
        }
    })
})
stat.forEach((e)=>{
    statobserver.observe(e)
})

const submit = document.querySelector("#send-btn")
const name=document.querySelector("#name");
const email=document.querySelector("#email");
const message=document.querySelector("#message");
const formstatus = document.querySelector("#form-status");
submit.addEventListener("click",(e)=>{
    const name_value = name.value.trim();
    const email_value = email.value.trim();
    const message_value = message.value.trim();
    if(name_value=="" || email_value=="" || message_value==""){
        formstatus.textContent="Please fill all the fields";
        formstatus.style.color="red";
    }
    else{
        formstatus.textContent = `Message Sent Successfully! 🤩🥳
        Author will Reply you in short time till then keep enjoying my portfolio!😎`;
        formstatus.style.color="#00f0ff";
        name.value="";
        email.value="";
        message.value="";
    }
})

