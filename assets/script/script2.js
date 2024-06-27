
const text=document.querySelector("#text");
const paragraph=document.querySelector("#paragraph");
text.addEventListener("click",()=>{
    paragraph.classList.toggle('scale')
    text.classList.add("text-center")
});

const btnDark=document.getElementById("btn-dark");
const color1=document.getElementById("color-1")
const color2=document.getElementById("color-2")
const color3=document.getElementById("color-3")
const color4=document.getElementById("color-4")
const color5=document.getElementById("color-5")
const color6=document.getElementById("color-6")
btnDark.addEventListener("click",(e)=>{
    e.preventDefault();
    const bodyStyle=document.querySelector(".body-style");
    bodyStyle.classList.toggle("bg-dark")
    bodyStyle.classList.toggle("text-light")
    color1.classList.toggle("text-light")
    color2.classList.toggle("text-light")
    color3.classList.toggle("text-light")
    color4.classList.toggle("text-light")
    color5.classList.toggle("text-light")
    color6.classList.toggle("text-light")
    btnDark.classList.toggle("bg-light")
})