var ratings=document.querySelectorAll(".rating");
console.log(ratings[1].textContent);
ratings.forEach(element=>{
    element.addEventListener("click",()=>{
        ratings.forEach(element=>{
            element.class
        })
        element.classList.add('chosen-rating');
    })
    
})