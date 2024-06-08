var ratings=document.querySelectorAll(".rating");
console.log(ratings[1].textContent);
ratings.forEach(element=>{
    element.addEventListener("click",()=>{
        ratings.forEach(element=>{
            element.classList.remove('chosen-rating')
        })
        element.classList.add('chosen-rating');
       for(var i=
    })
    
})