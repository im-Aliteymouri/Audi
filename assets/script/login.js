
const users = [ 
    {username:"ali teymouri", email: "a@sample.com", password: "12345678" }, 
    {username:"taha iranpanah", email: "b@sample.com", password: "23456789" }, 
    {username:"sanan cheraqi", email: "c@sample.com", password: "34567891" }, 
    {username:"arshiya karkhane", email: "d@sample.com", password: "12356789" }, 
    {username:"nokhbe", email: "e@sample.com", password: "13264894" }, 
    {username:"ebrahim", email: "f@sample.com", password: "95773275" }, 
  ]; 

const btnSubmit=document.querySelector("#btn-submit");
btnSubmit.addEventListener(("click"),(e)=>{
    e.preventDefault();
    const email=document.getElementById("email");
    const password=document.getElementById("password");
    const modalBody=document.querySelector(".modal-body")

    const filtere=users.filter((item)=>(item.email === email.value) && (item.password === password.value));

    if (filtere.length > 0) { 
        modalBody.innerHTML = "Login successful!"; 
        modalBody.classList.add("text-light"); 
        const closeBtn=document.querySelector("#btn-close");
        closeBtn.addEventListener("click",()=>{
            location.replace("./third.html")          
        })
      } else { 
        modalBody.classList.add("text-light"); 
        modalBody.innerHTML = "Invalid credentials"; 
      } 
})
 
