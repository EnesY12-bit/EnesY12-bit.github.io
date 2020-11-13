//console.log("hallo")
let c = document.querySelectorAll('.grid-item')
//console.log(c)
for(const i of c){
    i.addEventListener('click', function(event){
        console.log("klick")
    })
}
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.toggle('flip');
}




c.forEach(c => c.addEventListener('click', flipCard));
