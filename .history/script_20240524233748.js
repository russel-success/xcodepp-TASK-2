var ratings=document.querySelectorAll(".rating");
console.log(ratings[1].textContent);
ratings.forEach(element=>{
    element.classList.add('chosen-rating');
})