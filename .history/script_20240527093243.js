var ratings=document.querySelectorAll(".rating");
const submit_btn=document.querySelector(".submit");
const submit_container=document.createElement(".button-container");
const submit=document.createElement(".submit");

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
    });
    
});