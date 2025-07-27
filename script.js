/*
1) Get all the stars
2) add event listener to all stars
3) when we click on a star
    a) get the data-value attribute
    b) update the rating based on data-value attribute
4) update the stars based on rating - change the color of the stars
*/

const stars = document.querySelectorAll('.star');
const ratingValue = document.querySelector('#rating');

stars.forEach(function(star){
    star.addEventListener('click', function(){
        const value =  star.getAttribute('data-value');
        updateRating(value);
    })
})

function updateRating(value){
    // //first reset and then set
    // for(i=0;i<5;i++){
    //     stars[i].style.color = 'black';
    // }
    // for(i=0;i<value;i++){
    //     stars[i].style.color = 'yellow';
    // }

    stars.forEach(function(star){
        const StarValue = parseInt(star.getAttribute('data-value'));
        // for all the data star values less than value, we add the filled class else remove
        console.log(StarValue);
        star.classList.toggle('filled', StarValue<=value);
    })
    ratingValue.innerText = value;
}