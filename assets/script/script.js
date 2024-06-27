const btnDarkMood= document.querySelector("#btn-darkMood");

btnDarkMood.addEventListener("click",(e)=>{
    e.preventDefault()
    const colors=document.querySelectorAll(".color")
    const body=document.querySelector("#body");
    for(let color of colors){
        body.classList.toggle("bg-dark");
        color.classList.toggle("text-light");
        btnDarkMood.classList.toggle("bg-light")
        body.classList.toggle("text-light")
    }
})
