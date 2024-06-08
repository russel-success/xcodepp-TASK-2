var ratings=document.querySelectorAll(".rating");
const card_container=document.querySelector(".card-container");
// const submit_btn=document.querySelector(".submit");
const button_container=document.createElement("div");
const submit=document.createElement("button");

submit.textContent="submit";

console.log(ratings[1].textContent);
ratings.forEach(element=>{
    element.addEventListener("click",()=>{
        ratings.forEach(element=>{
            element.classList.remove('chosen-rating');
        })
        element.classList.add('chosen-rating');
       for(var i=0; i<element.textContent; i++){
        ratings[i].classList.add('chosen-rating');
       }
       card_container.appendChild(button_container);
       button_container.classList.add("button-container");
       button_container.appendChild(submit);
       submit.classList.add("submit");
    });
    
    
});