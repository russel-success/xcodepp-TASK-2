var ratings=document.querySelectorAll(".rating");
const card_container=document.querySelector(".card-container");
const submit_state_container=document.querySelector(".submit-state-container");
const
const button_container=document.createElement("div");
button_container.classList.add("button-container");
const submit=document.createElement("button");
submit.classList.add("submit");
submit.textContent="submit"

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