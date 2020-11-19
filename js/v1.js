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

const numberCards = 16

let p = document.querySelector(' .grid-container')
for (let index = 0; index < numberCards; index++) {
  let c = document.createElement('div')
  c.innerHTML = index + 1
  c.className = "grid-item"
  c.addEventListener('click',flipCard)
  p.appendChild(c)
}

function flip(event){
  if(!this.classList.contains('gefunden'))
    open(this)
}
function openCard(c){
  alert(c.innerHTML)
}