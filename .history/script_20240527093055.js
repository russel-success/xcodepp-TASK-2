var ratings=document.querySelectorAll(".rating");
const submit_btn=document.querySelector(".submit");
const submit=document.createElement(".submit")
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
       submit_btn.style.background="rgb(255, 145, 0)";
    });
    
});