const textHover=document.querySelector(".text-hover");
textHover.addEventListener("mouseover",()=>{
    const paragraphSecond=document.getElementById("paragraph-second");
    paragraphSecond.innerHTML="<p>Climate change mitigation, the responsible use of resources, societal advancement and social justice are among the great challenges of our time. Audi takes economic, ecological and social responsibility and has made sustainable business operations an integral part of all of its decisions and products. Find out more about how Audi is shaping the mobility of the future on the basis of a clear strategy.</p>"
})
const btnDarkM=document.getElementById("btn-darkM")
btnDarkM.addEventListener("click",(e)=>{
    e.preventDefault();
    const style=document.querySelector("#style-bg")
    const color1=document.getElementById("color-1")
    const color2=document.getElementById("color-2")
    const color3=document.getElementById("color-3")
    const color4=document.getElementById("color-4")
    const color5=document.getElementById("color-5")
    const color6=document.getElementById("color-6")
    style.classList.toggle("bg-dark")
    style.classList.toggle("text-light")
    color1.classList.toggle("text-light")
    color2.classList.toggle("text-light")
    color3.classList.toggle("text-light")
    color4.classList.toggle("text-light")
    color5.classList.toggle("text-light")
    color6.classList.toggle("text-light")
    btnDarkM.classList.toggle("bg-light")

})