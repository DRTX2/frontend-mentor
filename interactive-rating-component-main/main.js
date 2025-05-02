const ratings=document.getElementById("ratings");
const submitBtn=document.getElementById("send-rate");
const howSection=document.querySelector(".how");
const thanksSection=document.querySelector(".thanks");
const userRating=document.getElementById("userRating");
let lastSelectedElement;

ratings.addEventListener("click",e=>{
    if(!e.target.classList.contains("circle-item")) return;

    if(lastSelectedElement) lastSelectedElement.classList.remove("selected");

    lastSelectedElement=e.target;
    lastSelectedElement.classList.add("selected");
});

submitBtn.addEventListener("click",e=>{
    if(!lastSelectedElement) return;

    howSection.classList.toggle("active");
    thanksSection.classList.toggle("active");
    userRating.innerText=lastSelectedElement.textContent;
    
});
