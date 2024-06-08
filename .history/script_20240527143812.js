var ratings=document.querySelectorAll(".rating");
const card_container=document.querySelector(".card-container");
// const submit_btn=document.querySelector(".submit");
const button_container=document.createElement("div");
button_
const submit=document.createElement("button");

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
       button_container.appendChild(submit);
      card_container.appendChild(button_container);
      
    });
    
    
});