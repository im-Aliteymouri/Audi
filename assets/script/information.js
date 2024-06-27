const btnSub=document.querySelector(".btn-sub1");
const btnSub2=document.querySelector(".btn-sub2");
const btnSub3=document.querySelector(".btn-sub3");
const btnSub4=document.querySelector(".btn-sub4");
const modal=document.querySelector(".modal-body");
const modalTitle=document.querySelector(".modal-title");

btnSub.addEventListener("click",()=>{
    modal.innerHTML="<p>Where speed and comfort are required, the 2024 Audi RS7 Sportback delivers. It meets its mission so well that we honored it with a 2024 Editors' Choice award. Power comes from a 591-hp twin-turbo V-8 engine that's bolted to an eight-speed automatic transmission that sends power to all four wheels. It's a peppy puppy, and a new Performance trim adds an even louder bark, with 621 horsepower and 627 pound-feet of torque. Even when the RS7's gaping maw isn't swallowing bugs at high speeds, it serves as an easy-to-pilot and comfortable luxury performance sedan, among the likes of the Cadillac CT5-V Blackwing and BMW M5. Erring on the side of comfort, the RS7 attacks the road with delicacy rather than violent fury. Its rear-axle steering makes it feel lighter to drive than its hefty curb weight suggests, but should the hammer get thrown, its 190-mph top speed (unlocked with performance options) won't disappoint.</p>"
    modalTitle.innerText="AUDI RS7"
    
})
btnSub2.addEventListener("click",()=>{
    modalTitle.innerText="AUDI A6"
    modal.innerHTML="<p>The Audi A6 is an executive car made by the German company Audi since 1994. Now in its fifth generation, the successor to the Audi 100 is manufactured in Neckarsulm, Germany, and is available in saloon and estate configurations, the latter marketed by Audi as the Avant. Audi's internal numbering treats the A6 as a continuation of the Audi 100 lineage, with the initial A6 designated as a member of the C4-series, followed by the C5, C6, C7, and the C8. The related Audi A7 is essentially a Sportback (liftback) version of the C7-series[1] and C8-series A6 but is marketed under its own separate identity and model designation.</p>"
    // modal.innerHTML="<p></p>"
})
btnSub3.addEventListener("click",()=>{
    modalTitle.innerText="AUDI Q6"
    modal.innerHTML="<p>The Audi Q6 shares the same MQB Evo platform with the similarly sized Volkswagen Talagon and Teramont/Atlas.[3] While not a flagship model, it is the largest model currently marketed by Audi, outnumbering the Q7 and Q8 by exterior dimensions. It is mechanically unrelated to the upcoming Q6 e-tron.</p>"
})
btnSub4.addEventListener("click",()=>{
    modalTitle.innerText="AUDI RS6"
    modal.innerHTML="<p>The RS initials are taken from the German: RennSport – literally translated as racing sport, and is Audi's ultimate 'top-tier' high-performance trim level, positioned a noticeable step above the S model specification level of Audi's regular model range line-up. Like all Audi RS models, the RS 6 pioneers some of Audi's newest and most advanced engineering and technology, and so could be described as a halo vehicle, with the latest RS 6 Performance having the equal most powerful internal combustion engine out of all Audi models, with the same horsepower and torque as the physically larger Audi S8 Plus. Unlike the A6 and S6, however, the RS 6's engines in the C5 and C6 iterations have not been shared with any other vehicle in Audi's lineup. However, for the C7 generation, the Audi RS 6 has the same 4.0L bi-turbo V8 engine as the Audi RS 7, with both being positioned at the top of the Audi S and RS range, and detuned variants of the same engines are found in the Audi S8, Audi A8, and Audi S6.</p>"
})