// const btnBuy = document.getElementById("btn-buy");
// btnBuy.addEventListener("click", (e) => {
//     e.preventDefault();
//     const model = document.querySelector("#model");
//     const color = document.querySelector("#color");
//     const insatllment = document.querySelector("#insatllment");
//     let carPrice = 0;
//     if (model.value === "1") {
//         carPrice = 100000;
//     } else if (model.value === "2") {
//         carPrice = 70000;
//     } else {
//         carPrice = 35000;
//     }

//     let colorPrice = 0;
//     if (color.value === "1") {
//         colorPrice = 3500;
//     } else if (color.value === "2") {
//         colorPrice = 1000;
//     } else if (color.value === "3") {
//         colorPrice = 3000;
//     } else if (color.value === "4") {
//         colorPrice = 4000;
//     } else if (color.value === "5") {
//         colorPrice = 5000;
//     }
//     const price = carPrice + colorPrice;

//     let insatllmentMonth = 0;
//     if (insatllment.value === "1") {
//         insatllmentMonth = price * 0.03;
//     } else if (insatllment.value === "2") {
//         insatllmentMonth = price * 0.06;
//     } else {
//         insatllmentMonth = price * 0.12;
//     }

//     const totalPrice = price + insatllmentMonth
//     // console.log(totalPrice)
   
//     const container=document.getElementById("container");
//     container.innerText=totalPrice;
//     container.classList.add("text-light")
    
    
//     const modalBody = document.querySelector(".modal-body")
//     modalBody.innerText = "mission accomplished"
//     modalBody.classList.add("text-light");

//     btnMission=document.getElementById("btn-mission")
//     btnMission.addEventListener("click",()=>{
//         location.replace("../index.html")
//     })

// })

    const btnBuy=document.getElementById("btn-buy");
    const modal=document.querySelector(".modal-body");
    const model = document.querySelector("#model");
    const color = document.querySelector("#color");
    const insatllment = document.querySelector("#insatllment");

    btnBuy.addEventListener("click",(e)=>{
    e.preventDefault();
    if(model.value === "4" && color.value === "6" && insatllment.value === "4"){
    }else{
        let carPrice = 0;
            if (model.value === "1") {
                carPrice = 100000;
            } else if (model.value === "2") {
                carPrice = 70000;
            } else {
                carPrice = 35000;
            }
        
            let colorPrice = 0;
            if (color.value === "1") {
                colorPrice = 3500;
            } else if (color.value === "2") {
                colorPrice = 1000;
            } else if (color.value === "3") {
                colorPrice = 3000;
            } else if (color.value === "4") {
                colorPrice = 4000;
            } else if (color.value === "5") {
                colorPrice = 5000;
            }
            const price = carPrice + colorPrice;
        
            let insatllmentMonth = 0;
            if (insatllment.value === "1") {
                insatllmentMonth = price * 0.03;
            } else if (insatllment.value === "2") {
                insatllmentMonth = price * 0.06;
            } else {
                insatllmentMonth = price * 0.12;
            }
        
            const totalPrice = price + insatllmentMonth
            // console.log(totalPrice)
           
            const container=document.getElementById("container");
            container.innerText=totalPrice +" "+ "$";
            container.classList.add("text-light")
        
            
            modal.innerText ="totalprice:"+ totalPrice+" " + "$"+ " "+" "+ "mission accomplished"
            modal.classList.add("text-light");
        
            btnMission=document.getElementById("btn-mission")
            btnMission.addEventListener("click",()=>{
                location.replace("../index.html")
            })
    }
})