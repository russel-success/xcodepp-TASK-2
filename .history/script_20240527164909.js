var ratings=document.querySelectorAll(".rating");
const card_container=document.querySelector(".card-container");
const submit_state_container=document.querySelector(".submit-state-container");
const feedback_state_container=document.querySelector(".feedback-state-container");
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
        var rate_val=element.textContent;
       for(var i=0; i<element.textContent; i++){
        ratings[i].classList.add('chosen-rating');
       }
       button_container.appendChild(submit);
      submit_state_container.appendChild(button_container);
      
    });
    
    
});

submit.addEventListener("click",()=>{
    submit_state_container.style.display="none";
    feedback_state_container.style.display="contents";
    rate_span=document.querySelector("#rate-value");
    rate_span.textContent="5";
});